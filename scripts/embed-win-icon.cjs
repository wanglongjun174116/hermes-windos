const { readFile, writeFile } = require("fs/promises");
const path = require("path");
const { NtExecutable, NtExecutableResource, Resource, Data } = require("resedit");

/**
 * Embed build/icon.ico into a Windows .exe (RT_ICON / RT_GROUP_ICON).
 * Required when signAndEditExecutable is false (rcedit is skipped).
 */
async function embedWinIcon(exePath, icoPath) {
  const icoBuf = await readFile(icoPath);
  const iconFile = Data.IconFile.from(
    icoBuf.buffer.slice(icoBuf.byteOffset, icoBuf.byteOffset + icoBuf.byteLength),
  );
  const icons = iconFile.icons.map((item) => item.data);
  if (icons.length === 0) {
    throw new Error(`No icons found in ${icoPath}`);
  }

  const exeBuf = await readFile(exePath);
  const exe = NtExecutable.from(
    exeBuf.buffer.slice(exeBuf.byteOffset, exeBuf.byteOffset + exeBuf.byteLength),
  );
  const resource = NtExecutableResource.from(exe);
  Resource.IconGroupEntry.replaceIconsForResource(resource.entries, 1, 1033, icons);
  resource.outputResource(exe);
  await writeFile(exePath, Buffer.from(exe.generate()));
}

module.exports = { embedWinIcon };

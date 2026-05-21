/**
 * Regenerate build/icon.ico from build/icon.png (min 256x256 for electron-builder).
 */
const { readFile, writeFile } = require("fs/promises");
const path = require("path");
const { Data } = require("resedit");

async function generateIconIco(projectRoot) {
  const pngPath = path.join(projectRoot, "build", "icon.png");
  const icoPath = path.join(projectRoot, "build", "icon.ico");

  const { createRequire } = require("module");
  const requireFromRoot = createRequire(path.join(projectRoot, "package.json"));

  let sharp;
  try {
    sharp = requireFromRoot("sharp");
  } catch {
    sharp = null;
  }

  const sizes = [256, 128, 64, 48, 32, 16];
  const iconFile = new Data.IconFile();

  if (sharp) {
    const input = sharp(pngPath);
    for (const size of sizes) {
      const buf = await input
        .clone()
        .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer();
      iconFile.icons.push({
        width: size,
        height: size,
        data: Data.IconItem.from(size, size, buf),
      });
    }
  } else {
    const { execFileSync } = require("child_process");
    const ps1 = `
Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile('${pngPath.replace(/'/g, "''")}')
$sizes = @(256,128,64,48,32,16)
$images = New-Object System.Collections.ArrayList
foreach ($s in $sizes) {
  $bmp = New-Object System.Drawing.Bitmap($s, $s)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($src, 0, 0, $s, $s)
  $g.Dispose()
  [void]$images.Add($bmp)
}
$src.Dispose()
$ico = [System.Drawing.Icon]::FromHandle($images[0].GetHicon())
$fs = [System.IO.File]::Create('${icoPath.replace(/'/g, "''")}')
$ico.Save($fs)
$fs.Close()
foreach ($bmp in $images) { $bmp.Dispose() }
`;
    execFileSync(
      "powershell",
      ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", ps1],
      { stdio: "inherit" },
    );
    console.log(`[generate-icon-ico] Wrote ${icoPath} via PowerShell (multi-size)`);
    return;
  }

  await writeFile(icoPath, Buffer.from(iconFile.generate()));
  console.log(`[generate-icon-ico] Wrote ${icoPath} (${iconFile.icons.length} sizes)`);
}

if (require.main === module) {
  generateIconIco(path.join(__dirname, "..")).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { generateIconIco };

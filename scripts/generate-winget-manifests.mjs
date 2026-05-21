// scripts/generate-winget-manifests.mjs
//
// Fills the YAML templates in build/winget/ with the current version,
// installer URL, package metadata, and SHA256 of the NSIS installer in dist/,
// then writes the result under dist/winget/manifests/<publisher-initial>/<publisher>/<package>/<version>/.
//
// Run from CLI:
// VERSION=0.2.3 PUBLISH_OWNER=your-user PUBLISH_REPO=your-repo node scripts/generate-winget-manifests.mjs
// Or import as ESM and call generateWingetManifests({ rootDir, version, name, publishOwner, publishRepo }).

import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_PACKAGE_IDENTIFIER = "HermesWindos.HermesWindos";
const DEFAULT_PUBLISHER = "Hermes Windos";
const DEFAULT_PACKAGE_NAME = "Hermes Windos";
const DEFAULT_SHORT_DESCRIPTION = "Windows desktop app for Hermes Agent";
const DEFAULT_DESCRIPTION =
  "Hermes Windos is a Windows-first desktop app for installing, configuring, and running Hermes Agent with chat, tools, memory, schedules, gateways, and remote workflows.";

function normalizeDescription(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n  ");
}

function getPackagePathParts(packageIdentifier) {
  const [publisherPart, ...rest] = packageIdentifier.split(".");
  if (!publisherPart || rest.length === 0) {
    throw new Error(
      `Invalid package identifier "${packageIdentifier}". Expected a value like Publisher.PackageName.`,
    );
  }

  return {
    initial: publisherPart[0].toLowerCase(),
    publisherDir: publisherPart,
    packageDir: rest.join("."),
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function generateWingetManifests({
  rootDir,
  version,
  name,
  publishOwner,
  publishRepo,
  packageIdentifier = process.env.WINGET_PACKAGE_IDENTIFIER || DEFAULT_PACKAGE_IDENTIFIER,
  publisher = process.env.WINGET_PUBLISHER || DEFAULT_PUBLISHER,
  packageName = process.env.WINGET_PACKAGE_NAME || DEFAULT_PACKAGE_NAME,
  shortDescription = process.env.WINGET_SHORT_DESCRIPTION || DEFAULT_SHORT_DESCRIPTION,
  description = process.env.WINGET_DESCRIPTION || DEFAULT_DESCRIPTION,
}) {
  const exePath = join(rootDir, "dist", `${name}-${version}-setup.exe`);
  if (!existsSync(exePath)) {
    throw new Error(
      `NSIS installer not found at ${exePath}. ` +
        `Run electron-builder --win nsis first, or download the windows-artifacts CI artifact into dist/.`,
    );
  }

  const sha256 = createHash("sha256")
    .update(readFileSync(exePath))
    .digest("hex")
    .toUpperCase();
  const releaseDate = new Date().toISOString().slice(0, 10);
  const repoUrl = `https://github.com/${publishOwner}/${publishRepo}`;
  const installerUrl = `${repoUrl}/releases/download/v${version}/${name}-${version}-setup.exe`;
  const releaseNotesUrl = `${repoUrl}/releases/tag/v${version}`;
  const { initial, publisherDir, packageDir } =
    getPackagePathParts(packageIdentifier);

  const replacements = {
    VERSION: version,
    PACKAGE_IDENTIFIER: packageIdentifier,
    PUBLISHER: publisher,
    PUBLISHER_URL: repoUrl,
    PUBLISHER_SUPPORT_URL: `${repoUrl}/issues`,
    PACKAGE_NAME: packageName,
    PACKAGE_URL: repoUrl,
    LICENSE_URL: `${repoUrl}/blob/main/LICENSE`,
    SHORT_DESCRIPTION: shortDescription,
    DESCRIPTION: normalizeDescription(description),
    INSTALLER_URL: installerUrl,
    INSTALLER_SHA256: sha256,
    RELEASE_DATE: releaseDate,
    RELEASE_NOTES_URL: releaseNotesUrl,
  };

  const fillTemplate = (str) =>
    Object.entries(replacements).reduce(
      (acc, [key, value]) => acc.replaceAll(`{{${key}}}`, value),
      str,
    );

  const templateDir = join(rootDir, "build", "winget");
  if (!existsSync(templateDir)) {
    throw new Error(
      `Winget templates not found at ${templateDir}. ` +
        `This script must be run from the repo root.`,
    );
  }

  const outDir = join(
    rootDir,
    "dist",
    "winget",
    "manifests",
    initial,
    publisherDir,
    packageDir,
    version,
  );
  mkdirSync(outDir, { recursive: true });

  const files = [
    ["Installer.template.yaml", `${packageIdentifier}.installer.yaml`],
    ["Locale.en-US.template.yaml", `${packageIdentifier}.locale.en-US.yaml`],
    ["Version.template.yaml", `${packageIdentifier}.yaml`],
  ];

  for (const [templateName, outputName] of files) {
    const template = readFileSync(join(templateDir, templateName), "utf-8");
    writeFileSync(join(outDir, outputName), fillTemplate(template));
  }

  return { outDir, sha256, installerUrl, packageIdentifier };
}

const isCli =
  process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isCli) {
  const rootDir = process.cwd();
  const pkg = JSON.parse(readFileSync(join(rootDir, "package.json"), "utf-8"));
  const result = generateWingetManifests({
    rootDir,
    version: process.env.VERSION || pkg.version,
    name: pkg.name,
    publishOwner: process.env.PUBLISH_OWNER || "hermeswindos",
    publishRepo: process.env.PUBLISH_REPO || "hermes-windos",
  });
  console.log(`Winget manifests generated in ${result.outDir}`);
  console.log(`PackageIdentifier: ${result.packageIdentifier}`);
  console.log(`InstallerSha256: ${result.sha256}`);
  console.log(`InstallerUrl: ${result.installerUrl}`);
}

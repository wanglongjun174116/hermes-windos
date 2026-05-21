import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { join } from "path";
import {
  existsSync,
  readFileSync,
  mkdirSync,
  writeFileSync,
  rmSync,
  mkdtempSync,
} from "fs";
import { tmpdir } from "os";
// @ts-expect-error - .mjs has no type declarations; we test it as JS.
import { generateWingetManifests } from "../scripts/generate-winget-manifests.mjs";

let TEST_DIR: string;

beforeEach(() => {
  TEST_DIR = mkdtempSync(join(tmpdir(), "winget-test-"));
});

afterEach(() => {
  rmSync(TEST_DIR, { recursive: true, force: true });
});

function setupTemplates(rootDir: string): void {
  const buildDir = join(rootDir, "build", "winget");
  mkdirSync(buildDir, { recursive: true });
  writeFileSync(
    join(buildDir, "Installer.template.yaml"),
    "Id: {{PACKAGE_IDENTIFIER}}\nVersion: {{VERSION}}\nUrl: {{INSTALLER_URL}}\nSha: {{INSTALLER_SHA256}}\nDate: {{RELEASE_DATE}}\n",
  );
  writeFileSync(
    join(buildDir, "Locale.en-US.template.yaml"),
    "Publisher: {{PUBLISHER}}\nPackageName: {{PACKAGE_NAME}}\nPackageUrl: {{PACKAGE_URL}}\nLicenseUrl: {{LICENSE_URL}}\nDescription: {{DESCRIPTION}}\nNotes: {{RELEASE_NOTES_URL}}\n",
  );
  writeFileSync(
    join(buildDir, "Version.template.yaml"),
    "Id: {{PACKAGE_IDENTIFIER}}\nVersion: {{VERSION}}\n",
  );
}

describe("generateWingetManifests", () => {
  it("produces three YAML files under the winget-pkgs directory layout", () => {
    setupTemplates(TEST_DIR);
    const distDir = join(TEST_DIR, "dist");
    mkdirSync(distDir, { recursive: true });
    writeFileSync(
      join(distDir, "hermes-windos-9.9.9-setup.exe"),
      "fake-installer-bytes",
    );

    generateWingetManifests({
      rootDir: TEST_DIR,
      version: "9.9.9",
      name: "hermes-windos",
      publishOwner: "hermeswindos",
      publishRepo: "hermes-windos",
    });

    const outDir = join(
      distDir,
      "winget",
      "manifests",
      "h",
      "HermesWindos",
      "HermesWindos",
      "9.9.9",
    );
    expect(
      existsSync(join(outDir, "HermesWindos.HermesWindos.installer.yaml")),
    ).toBe(true);
    expect(
      existsSync(join(outDir, "HermesWindos.HermesWindos.locale.en-US.yaml")),
    ).toBe(true);
    expect(existsSync(join(outDir, "HermesWindos.HermesWindos.yaml"))).toBe(
      true,
    );
  });

  it("replaces all placeholders in the installer manifest", () => {
    setupTemplates(TEST_DIR);
    const distDir = join(TEST_DIR, "dist");
    mkdirSync(distDir, { recursive: true });
    writeFileSync(
      join(distDir, "hermes-windos-9.9.9-setup.exe"),
      "fake-installer-bytes",
    );

    generateWingetManifests({
      rootDir: TEST_DIR,
      version: "9.9.9",
      name: "hermes-windos",
      publishOwner: "hermeswindos",
      publishRepo: "hermes-windos",
    });

    const outFile = join(
      distDir,
      "winget",
      "manifests",
      "h",
      "HermesWindos",
      "HermesWindos",
      "9.9.9",
      "HermesWindos.HermesWindos.installer.yaml",
    );
    const content = readFileSync(outFile, "utf-8");
    expect(content).toContain("Id: HermesWindos.HermesWindos");
    expect(content).toContain("Version: 9.9.9");
    expect(content).toContain(
      "Url: https://github.com/hermeswindos/hermes-windos/releases/download/v9.9.9/hermes-windos-9.9.9-setup.exe",
    );
    expect(content).toMatch(/Sha: [A-F0-9]{64}/);
    expect(content).toMatch(/Date: \d{4}-\d{2}-\d{2}/);
    expect(content).not.toContain("{{");
  });

  it("replaces metadata fields in the locale manifest", () => {
    setupTemplates(TEST_DIR);
    const distDir = join(TEST_DIR, "dist");
    mkdirSync(distDir, { recursive: true });
    writeFileSync(
      join(distDir, "hermes-windos-9.9.9-setup.exe"),
      "fake-installer-bytes",
    );

    generateWingetManifests({
      rootDir: TEST_DIR,
      version: "9.9.9",
      name: "hermes-windos",
      publishOwner: "hermeswindos",
      publishRepo: "hermes-windos",
    });

    const outFile = join(
      distDir,
      "winget",
      "manifests",
      "h",
      "HermesWindos",
      "HermesWindos",
      "9.9.9",
      "HermesWindos.HermesWindos.locale.en-US.yaml",
    );
    const content = readFileSync(outFile, "utf-8");
    expect(content).toContain("Publisher: Hermes Windos");
    expect(content).toContain("PackageName: Hermes Windos");
    expect(content).toContain(
      "PackageUrl: https://github.com/hermeswindos/hermes-windos",
    );
    expect(content).toContain(
      "LicenseUrl: https://github.com/hermeswindos/hermes-windos/blob/main/LICENSE",
    );
    expect(content).toContain(
      "Notes: https://github.com/hermeswindos/hermes-windos/releases/tag/v9.9.9",
    );
    expect(content).not.toContain("{{");
  });

  it("throws a clear error when the installer .exe is missing", () => {
    setupTemplates(TEST_DIR);
    mkdirSync(join(TEST_DIR, "dist"), { recursive: true });

    expect(() =>
      generateWingetManifests({
        rootDir: TEST_DIR,
        version: "9.9.9",
        name: "hermes-windos",
        publishOwner: "hermeswindos",
        publishRepo: "hermes-windos",
      }),
    ).toThrow(/installer not found/i);
  });

  it("throws a clear error when the templates directory is missing", () => {
    const distDir = join(TEST_DIR, "dist");
    mkdirSync(distDir, { recursive: true });
    writeFileSync(
      join(distDir, "hermes-windos-9.9.9-setup.exe"),
      "fake-installer-bytes",
    );

    expect(() =>
      generateWingetManifests({
        rootDir: TEST_DIR,
        version: "9.9.9",
        name: "hermes-windos",
        publishOwner: "hermeswindos",
        publishRepo: "hermes-windos",
      }),
    ).toThrow(/templates not found/i);
  });
});

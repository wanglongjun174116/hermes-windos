# GitHub 发布清单

这份清单用于把当前仓库整理成一个可公开发布的 `Hermes Windos` 版本。

## 1. 仓库首页

发布前确认：

- [`README.md`](../README.md) 已符合你要公开展示的项目定位
- [`NOTICE.zh-CN.md`](../NOTICE.zh-CN.md) 保留并明确说明了上游来源
- [`LICENSE`](../LICENSE) 继续保留 MIT 原文

## 2. 品牌与版本

重点检查：

- [`package.json`](../package.json)
  - `name`
  - `version`
  - `description`
  - `author`
  - `homepage`
- [`electron-builder.yml`](../electron-builder.yml)
  - `appId`
  - `productName`
  - `executableName`
  - `publish.owner`
  - `publish.repo`

## 3. 更新与发布源

重点检查：

- [`dev-app-update.yml`](../dev-app-update.yml)
- [`.github/workflows/release.yml`](../.github/workflows/release.yml)
- [`scripts/generate-winget-manifests.mjs`](../scripts/generate-winget-manifests.mjs)
- [`build/winget/`](../build/winget)

如果你的 GitHub 用户名或组织名不是 `hermeswindos`，这些位置要改成你自己的仓库信息。

## 4. 官网内容

重点检查：

- [`website/`](../website)
- 下载按钮是否指向你的 Releases
- 官网中的 GitHub 链接是否还是占位仓库
- 版本统计是否能从你的 Releases 正常读取

## 5. 对外说明

建议统一使用以下方向：

- 品牌名：`Hermes Windos`
- 副标题：`Hermes Agent 的 Windows 桌面版`
- 对外说明中明确：
  - 这是基于上游 `fathah/hermes-desktop` 整理发布的版本
  - 保留 MIT 许可证与原始版权声明

## 6. 发布前自检

至少执行一次：

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

如需平台构建：

```bash
npm run build:win
npm run build:mac
npm run build:linux
npm run build:rpm
```

# 贡献说明

欢迎继续把 `Hermes Windos` 打磨成一个更适合 `Hermes Agent` 的桌面发布版本。

## 基本原则

- 保留上游 `fathah/hermes-desktop` 的 MIT 版权信息
- 不删除根目录 [`LICENSE`](LICENSE)
- 新增说明、文案和发布配置时，优先保持中文清晰可读
- 发布相关修改要同步检查官网、自动更新和构建脚本

## 建议流程

1. 先阅读 [README.md](README.md) 和 [docs/GITHUB-发布清单.md](docs/GITHUB-发布清单.md)
2. 修改前先确认是否会影响构建、自动更新或下载链接
3. 提交前至少执行一次：

```bash
npm run lint
npm run typecheck
npm run test
```

## 文档要求

- 面向公开仓库展示的文档尽量使用中文
- 如果修改官网内容，同时检查 `website/` 目录中的下载链接和仓库链接
- 如果新增“基于上游改造”的表述，请保留来源说明，不要写成原创首发

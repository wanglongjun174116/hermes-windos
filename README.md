# Hermes Windos

![Hermes Windos](https://github.com/user-attachments/assets/80585955-3bae-4aee-af90-a1e61757ccb8)

`Hermes Windos` 是一个围绕 `Hermes Agent` 打造的 Windows-first 桌面控制台。
它不是单纯给命令行套一个窗口，而是把安装、配置、聊天、记忆、工具、调度、网关、远程连接和长期运行工作流整合进一套更适合日常使用的桌面体验。

当前仓库已经按"独立公开发布版本"做过整理，主打方向是：

- `Hermes Agent` 的 Windows 桌面版 / Desktop 版
- 面向希望从 CLI 走向图形化工作流的开发者、高级用户和小团队
- 保留上游 `fathah/hermes-desktop` 的 MIT 许可证与版权信息
- 用中文文档、中文发布说明和独立官网素材完成重包装

官网静态内容位于 [`website/`](website/index.html)，品牌域名预留为 [www.hermeswindos.com](https://www.hermeswindos.com)。

## 项目特色

- 引导式安装与首启配置，降低 Hermes Agent 上手门槛
- 聊天工作区、会话历史、流式输出与上下文恢复
- `Profiles`、`Memory`、`Skills`、`Tools`、`Soul` 等长期使用能力集中管理
- `Schedules`、`Gateway`、`Kanban`、`Office` 等偏自动化和长周期运行模块
- 本地运行、Remote API、SSH 三种常见部署模式统一管理
- 多模型、多 Provider 接入，也支持 OpenAI-compatible 端点

## 这个仓库已经整理了什么

- 根文档改为中文
- 官网文案、下载页和版本页已经整理到 `website/`
- GitHub 发布相关配置已切换到 `Hermes Windos` 品牌
- `winget` 模板和发布脚本已改成适合新仓库发布的配置化版本
- 自动更新源默认指向 `hermeswindos/hermes-windos`

如果你的 GitHub 用户名或组织名不是 `hermeswindos`，发布前请改这些文件里的仓库配置：

- [`electron-builder.yml`](electron-builder.yml)
- [`dev-app-update.yml`](dev-app-update.yml)
- [`website/app.js`](website/app.js)

## 与上游项目的关系

本项目基于上游仓库 [fathah/hermes-desktop](https://github.com/fathah/hermes-desktop) 继续整理、扩展与重包装。

保留原则如下：

- 根目录 [`LICENSE`](LICENSE) 继续保留上游 MIT 许可证原文
- 不移除上游版权声明
- 对外文档明确说明这是基于上游项目整理出的新发布版本

详细说明见：

- [NOTICE.zh-CN.md](NOTICE.zh-CN.md)

## 安装与开发

安装依赖：

```bash
npm install
```

启动开发模式：

```bash
npm run dev
```

检查代码：

```bash
npm run lint
npm run typecheck
```

运行测试：

```bash
npm run test
```

构建应用：

```bash
npm run build
```

按平台构建：

```bash
npm run build:win
npm run build:mac
npm run build:linux
npm run build:rpm
```

## 文档入口

- [中文发布清单](docs/GITHUB-发布清单.md)
- [中文文档索引](docs/README.md)
- [变更记录](CHANGELOG.zh-CN.md)
- [SSH 隧道远程连接指南](docs/SSH-TUNNEL-VPS.md)
- [上游版权与衍生说明](NOTICE.zh-CN.md)

## 许可证

本项目继续使用 MIT 许可证发布，并保留上游版权声明。

- [LICENSE](LICENSE)
- [NOTICE.zh-CN.md](NOTICE.zh-CN.md)

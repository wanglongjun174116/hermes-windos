# Hermes Desktop 官网规划

## 0. 域名与主打方向

- 域名：`www.hermeswindos.com`
- 主打方向：`Hermes Agent 的 Windows 桌面版`
- 兼容方向：`Hermes Agent 的 Desktop 版`

建议把官网对外表达拆成两层：

### 品牌层

- `Hermes Windos`

### 解释层

- `The Windows desktop app for Hermes Agent`
- `Hermes Agent Desktop for Windows`

这样做的好处是：

- 域名和品牌统一，方便记忆
- 首页第一眼就能讲清它和 Hermes Agent 的关系
- 既能吃到 `Hermes Agent Windows` 搜索词，也能覆盖 `Hermes Agent Desktop` 搜索词

## 1. 项目定位

Hermes Desktop 不是单纯的 AI 聊天桌面壳，而是一个面向 Hermes Agent 的可视化控制台。

它解决的是这类用户的真实问题：

- 想用 Hermes Agent，但不想从 CLI、环境变量、配置文件、Python、Node、网关、Cron、远程 API 这些细节开始
- 想把本地 Agent、远程 Agent、SSH 隧道、模型提供商、多平台消息入口、技能、记忆、任务、自动化都放进一个统一界面
- 想让一个“能调用工具、能记忆、能调度、能接入外部平台”的 Agent 真正变成可安装、可配置、可管理、可长期使用的桌面产品

一句话定位建议：

> 把 Hermes Agent 变成人人都能安装、配置、运行和扩展的 Windows 桌面工作台。

备选一句话：

- The Windows desktop control center for Hermes Agent.
- Hermes Agent, now in a real desktop app.

## 2. 源码确认后的核心特色

以下能力已经在项目中有明确落点，适合官网重点讲，不只是 README 层面的口号。

### A. 把复杂安装流程产品化

- 首次启动会检查本地安装状态、配置状态、API key 状态，并决定进入欢迎页、安装页、配置页还是主界面
- 支持调用官方 Hermes 安装脚本，带进度反馈、验证、更新、备份、导入、诊断、日志读取
- 兼顾 Windows、macOS、Linux 的安装差异和路径问题

官网表达建议：

> 从“命令行项目”变成“点开就能用的桌面应用”。

### B. 本地、远程、SSH 三种运行模式统一

- 本地模式：直接管理本机 Hermes
- Remote mode：连接远端 Hermes API Server
- SSH mode：通过 SSH 隧道连接远程机器，并补齐更多本地级能力

这点非常关键，因为它说明 Hermes Desktop 既适合个人本机使用，也适合远程服务器/家用主机/实验机部署。

官网表达建议：

> Run Hermes wherever it belongs: on your laptop, on a remote box, or through a secure SSH tunnel.

### C. 它是一个完整工作台，不只是 Chat

从主导航看，产品已经包含：

- Chat
- Sessions
- Agents / Profiles
- Office
- Kanban
- Models
- Providers
- Skills
- Soul
- Memory
- Tools
- Schedules
- Gateway
- Settings

这意味着官网信息架构不能只围绕聊天，而要围绕“Agent Operations Console”来组织。

### D. 多模型接入非常强

源码里的 provider 列表明显比 README 更完整，除了 OpenRouter / Anthropic / OpenAI / Google / xAI / Nous 之外，还覆盖：

- Mistral
- DeepSeek
- Groq
- Together AI
- Fireworks AI
- Cerebras
- Perplexity
- Hugging Face
- NVIDIA NIM
- Z.ai / GLM
- Qwen
- MiniMax
- 多种 OAuth / CLI 订阅型入口
- 任意 OpenAI-compatible endpoint

同时还有本地预设：

- LM Studio
- Ollama
- vLLM
- llama.cpp

官网表达建议：

> Bring your own model stack. Cloud APIs, local models, OAuth-backed plans, and OpenAI-compatible endpoints all live behind one desktop UI.

### E. 多平台消息网关是很强的差异化

Gateway 配置不是附属功能，而是产品级能力。源码里可见平台包括：

- Telegram
- Discord
- Slack
- WhatsApp
- Signal
- Matrix
- Mattermost
- Email
- SMS
- iMessage / BlueBubbles
- DingTalk
- Feishu / Lark
- WeCom
- WeChat
- Webhooks
- Home Assistant

官网表达建议：

> Hermes doesn’t have to live in one window. Connect it to the channels where work already happens.

### F. 调度、自动化与长期运行能力已经具备

- 内置 Schedules / Cron Job 管理界面
- 可选择本地或多种投递目标
- 支持触发、暂停、恢复、远程 API 模式

这让官网可以从“chat app”升级为“agent automation platform”。

### G. 记忆、人格、技能、工具都可视化

- Memory：读写长期记忆与用户资料
- Soul：编辑 Agent persona
- Skills：安装、浏览、卸载技能
- Tools：启停 toolsets
- 可发现多种 memory providers

这是“可塑性”和“可长期养成”的核心卖点。

### H. Kanban 与 Office 提供了更高阶的 Agent 工作流

- Kanban 不是普通任务板，而是面向多 agent / 可调度任务的 durable board
- Office（Claw3D）提供可视化 3D/Office 工作界面与服务启动管理

这两块是官网中最容易建立高级感和差异化认知的内容，适合做大图和场景化展示。

### I. 安全边界做得比较认真

- Electron 窗口与 webview 有明确的 URL 白名单和 hardened 配置
- 外链、导航、webview 都有约束
- 本地与远程模式分流明确，避免误触本地 gateway

官网不必写得很底层，但可以归纳为：

> Private by default. Explicit about boundaries.

### J. 已具备国际化基础

当前 locale 目录可见 8 种语言版本，说明产品天然具备全球化官网叙事空间。

## 3. 官网最适合讲的产品故事

不建议把官网讲成：

- “又一个 AI 桌面客户端”
- “Hermes Agent 的 GUI”

更建议讲成：

### 主叙事

Hermes Desktop 是一个把开源 Agent 从“会用命令行的人才能驾驭”的状态，推进到“普通高级用户、独立开发者、小团队都能长期使用”的桌面控制台。

### 三层价值表达

#### 第一层：更容易开始

- 一键安装
- 图形化配置
- 模型接入更简单
- 日志、诊断、更新、备份都在 UI 里

#### 第二层：更容易长期使用

- 会话、记忆、人格、技能、工具集中管理
- 多 profile 隔离
- 本地/远程/SSH 三种模式统一

#### 第三层：更容易让 Agent 真正工作

- 调度任务
- 接入消息平台
- 管理工具能力
- 用 Kanban 和 Office 承载更复杂流程

## 4. 目标用户

官网建议明确分为 4 类用户，而不是泛泛写“everyone”。

### 1. AI Power Users

- 想要比 ChatGPT 桌面客户端更可控
- 想管理多模型、多 profile、本地模型、远端节点

### 2. 开发者 / 独立黑客

- 想把 Hermes Agent 真正接入代码、文件、自动化、长期记忆
- 不想每次都折腾配置文件与命令行

### 3. Agent Operators / 自动化玩家

- 想长期运行 Agent
- 想接入 Telegram、Slack、邮箱、Webhook、Home Assistant 等渠道
- 想做调度、通知、自动任务

### 4. 小团队 / 实验团队

- 想把 Hermes 作为实验性生产力平台
- 需要 profile 隔离、远程部署、统一 GUI 管理

## 5. 官网信息架构

建议采用 1 个主站首页 + 4 个一级详情页。

### 首页

目标：

- 30 秒内讲清“这不是普通 AI 聊天客户端”
- 直接建立“桌面控制中心”认知

建议结构：

1. Hero
2. Social proof / quick facts
3. Why Hermes Desktop
4. Core workflows
5. Feature grid
6. Screenshots / product tour
7. Deployment modes
8. Integrations
9. FAQ
10. CTA footer

### 一级页面建议

- Features
- Integrations
- Installation
- Docs / GitHub / Community

如后续要做增长，可再加：

- Changelog
- Roadmap
- Showcase / Use cases

## 6. 首页模块规划

## Hero

标题建议方向：

- Hermes Windos
  The Windows desktop app for Hermes Agent.

- Hermes Agent, now with a real Windows desktop app.

- Install, configure, and run Hermes Agent from one Windows desktop app.

副标题建议：

> Guided install, provider setup, memory, skills, tools, schedules, gateways, remote connections, and long-running agent workflows for Hermes Agent, all in one desktop workspace.

CTA 建议：

- Download for Windows
- Get Hermes Agent Desktop
- View on GitHub
- Read Docs

Hero 右侧视觉建议：

- 主界面拼贴：Chat + Gateway + Kanban + Office
- 不要只放单张聊天截图

## Quick Facts

可以用 4 到 6 个指标块：

- Local / Remote / SSH
- 16 messaging platforms
- 16 toolsets
- 8 languages
- Cross-platform desktop
- Built on Hermes Agent

注意：

- 这里的工具数以源码为准，当前比 README 中写的更多

## Why Hermes Desktop

三栏叙事最合适：

- Start without terminal ceremony
- Operate Hermes across local and remote environments
- Turn your agent into a long-running system

## Core Workflows

建议用场景而不是功能名：

- Install and configure Hermes in minutes
- Switch between local models and hosted providers
- Run the same agent from your laptop or a remote box
- Schedule tasks and deliver results where you work
- Manage memory, persona, tools, and skills visually
- Route multi-agent work through Kanban and Office

## Feature Grid

建议拆成 6 个大块：

### Guided Setup

- Installer
- Verification
- Updates
- Backup / import
- Doctor / logs

### Agent Workspace

- Chat
- Sessions
- Slash commands
- Streaming output
- Token usage

### Configuration Layer

- Providers
- Models
- Profiles
- Tools
- Skills
- Soul / Memory

### Deployment Modes

- Local
- Remote HTTP
- SSH tunnel

### Automation & Operations

- Schedules
- Gateway
- Delivery targets
- Long-running workflows

### Advanced Interfaces

- Kanban
- Hermes Office / Claw3D

## Product Tour

优先展示 6 张图：

1. Welcome / Setup
2. Chat
3. Profiles
4. Skills or Tools
5. Gateway
6. Kanban or Office

如果只能突出 4 张，优先：

1. Chat
2. Setup
3. Gateway
4. Kanban

原因：这 4 张最能形成“不是普通聊天 app”的认知。

## Integrations 区

建议分 3 组展示：

### Models

OpenRouter, Anthropic, OpenAI, Google, xAI, DeepSeek, Groq, Qwen, MiniMax, Hugging Face, local endpoints...

### Messaging

Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Email, SMS, Feishu, WeCom...

### Agent Runtime

Hermes Agent, local mode, remote API, SSH tunnel, OpenAI-compatible backends

## FAQ

建议直接回答这些问题：

- Is Hermes Desktop just a chat UI?
- Do I need to install Hermes manually?
- Can I use local models?
- Can I connect to a remote server?
- Is SSH supported?
- Can I run scheduled automations?
- Which messaging platforms are supported?
- Is my data local by default?

## 7. 官网文案重点

官网文案应避免的方向：

- 过度强调“自我进化”“AGI”“革命性”
- 把全部价值压缩成“开源 + 本地隐私”
- 全程站在技术实现角度写，而忽略用户结果

更好的文案关键词：

- control center
- desktop workspace
- operations console
- agent runtime
- local-first
- remote-capable
- long-running workflows
- configurable memory / skills / tools

## 8. 视觉与风格建议

基于产品气质，官网适合走“系统控制台 + 现代研究工具”的视觉方向，而不是通用 SaaS 模板。

### 推荐方向

- 深色或中性深灰底，但不要纯黑
- 大面积结构化分区、细边框、弱发光、高密度信息块
- 字体偏技术感与现代感
- 插图少，产品截图和系统图多
- 让“控制台感”强于“营销海报感”

### 视觉关键词

- Operator dashboard
- Agent cockpit
- Research workstation
- Technical but polished

### 不建议

- 过于轻飘的 AI 渐变风
- 只有抽象球体和发光线条，没有真实产品内容
- 把它做成普通企业官网

## 9. 首页应该突出而当前 README 没完全突出的点

这些点非常适合官网首屏或次屏强调：

- Local / Remote / SSH 三模式统一
- Gateway 多平台接入
- Kanban 多 agent 工作流
- Office / Claw3D 可视化工作界面
- Memory / Soul / Skills / Tools 全部可视化
- 安装、更新、备份、导入、诊断全在桌面里

其中：

- Kanban 是高级能力信号
- Gateway 是生态连接信号
- Setup + Update + Backup 是产品完成度信号

## 10. 建议的官网栏目顺序

最推荐：

1. Hero
2. “Why this exists”
3. 核心能力卡片
4. 产品截图
5. 场景化工作流
6. Integrations
7. Installation / platforms
8. FAQ
9. Final CTA

## 11. 素材清单

官网开工前建议准备：

### 必需素材

- 最新安装流程截图
- Chat 截图
- Gateway 截图
- Kanban 截图
- Skills / Tools / Memory 任一截图
- Office 截图

### 可选素材

- SSH 模式示意图
- 本地 / 远程 / SSH 三模式结构图
- Provider / Messaging 平台 logo 墙
- 功能对比图：CLI-only vs Desktop workflow

## 12. SEO 与传播关键词

英文关键词建议：

- Hermes Windos
- hermeswindos
- Hermes Agent desktop app
- Hermes Agent Windows app
- Hermes Agent Windows desktop
- Hermes Agent desktop for Windows
- AI agent desktop client
- local AI agent desktop
- open source AI agent GUI
- Hermes Agent UI
- AI agent control center
- desktop app for AI agents

中文关键词建议：

- Hermes Windos
- Hermes Agent 桌面版
- Hermes Agent Windows 版
- Hermes Agent Windows 桌面版
- AI Agent 桌面客户端
- 本地 AI Agent 控制台
- 开源 Agent 图形界面

## 13. 建站优先级建议

### 第一版必须有

- 首页
- Windows 下载入口
- GitHub / Docs / 社群入口
- 功能总览
- 平台支持
- 截图

### 第二版再补

- 深度功能页
- 使用场景页
- 更新日志页
- 对比页

## 14. 建议的下一步

建议按这个顺序推进官网：

1. 先定品牌写法：`Hermes Windos` + `Hermes Agent Desktop for Windows`
2. 选 4 到 6 个最能拉开差异的功能作为首版主卖点
3. 先做首页信息架构和线框图
4. 再确定视觉方向
5. 最后再补 Features / Integrations / Installation 子页

## 15. 首版官网卖点优先级

如果首页只能讲 6 个点，建议按这个顺序：

1. Guided setup for Hermes Agent
2. Local, remote, and SSH modes
3. Multi-provider and local model support
4. Messaging gateways and scheduled automations
5. Memory, skills, tools, and persona management
6. Kanban and Office for advanced agent workflows

## 16. 推荐标题与副标题

如果你希望官网更偏搜索和转化，我建议优先用下面这组：

### H1

Hermes Windos

### H2 / 副标题

The Windows desktop app for Hermes Agent

### 首屏说明

Install, configure, and run Hermes Agent with a proper desktop interface for chat, memory, tools, schedules, gateways, and remote workflows.

## 17. 导航与栏目命名建议

为了贴合域名和主打方向，官网导航建议简洁一些：

- Home
- Features
- Screenshots
- Download
- Docs
- GitHub

如果首页中文化，建议：

- 首页
- 功能
- 截图
- 下载
- 文档
- GitHub

---

## 附：本次检查中对官网定位最有帮助的源码区域

- `README.md`
- `src/renderer/src/screens/Layout/Layout.tsx`
- `src/main/index.ts`
- `src/main/installer.ts`
- `src/main/hermes.ts`
- `src/main/tools.ts`
- `src/renderer/src/constants.ts`
- `src/renderer/src/screens/Kanban/Kanban.tsx`
- `src/renderer/src/screens/Office/Office.tsx`

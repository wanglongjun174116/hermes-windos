const screenshots = [
  {
    image:
      "https://github.com/user-attachments/assets/ca84a56c-4d14-4775-96bb-c725069988be",
    key: "chat",
  },
  {
    image:
      "https://github.com/user-attachments/assets/214bfa60-48ec-4449-be40-370628205147",
    key: "office",
  },
  {
    image:
      "https://github.com/user-attachments/assets/bd812e4a-bbdc-4141-b3a8-1ab5b0e561d4",
    key: "profiles",
  },
  {
    image:
      "https://github.com/user-attachments/assets/ad051fbe-055d-40d2-b6dd-959c522412d2",
    key: "tools",
  },
  {
    image:
      "https://github.com/user-attachments/assets/b3f7e0d8-b087-4935-b57c-f8db30491f2e",
    key: "settings",
  },
  {
    image:
      "https://github.com/user-attachments/assets/508c3501-52eb-419d-8cfd-06268875ff62",
    key: "skills",
  },
];

const REPO_OWNER = "hermeswindos";
const REPO_NAME = "hermes-windos";
const REPO_GITHUB_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
const REPO_RELEASES_URL = `${REPO_GITHUB_URL}/releases/`;
const REPO_RELEASES_MATCH = `${REPO_GITHUB_URL}/releases`;
const UPSTREAM_GITHUB_URL = "https://github.com/fathah/hermes-desktop";
const UPSTREAM_RELEASES_URL = `${UPSTREAM_GITHUB_URL}/releases/`;

function replaceRepoLink(value) {
  if (typeof value !== "string") return value;
  return value
    .replaceAll(UPSTREAM_RELEASES_URL, REPO_RELEASES_URL)
    .replaceAll(UPSTREAM_GITHUB_URL, REPO_GITHUB_URL);
}

function normalizeRepoLinks(input) {
  if (Array.isArray(input)) {
    input.forEach((entry, index) => {
      if (typeof entry === "string") {
        input[index] = replaceRepoLink(entry);
        return;
      }

      if (entry && typeof entry === "object") {
        normalizeRepoLinks(entry);
      }
    });
    return input;
  }

  if (!input || typeof input !== "object") {
    return input;
  }

  Object.entries(input).forEach(([key, value]) => {
    if (typeof value === "string") {
      input[key] = replaceRepoLink(value);
      return;
    }

    if (value && typeof value === "object") {
      normalizeRepoLinks(value);
    }
  });

  return input;
}

const releaseCopy = {
  zh: {
    loading: "加载中",
    unknown: "待获取",
    totalDownloads: "累计下载",
    latestVersion: "最新版本",
    latestReleaseDownloads: "最新版本下载",
    trackedReleases: "已追踪版本",
    windowsAssets: "Windows 安装资产",
    downloadSource: "数据来源：GitHub Releases",
    cachedSource: "显示最近一次缓存的 GitHub Releases 数据。",
    unavailableSource: "暂时无法拉取 GitHub 实时数据，按钮仍可直接前往 Releases。",
    releaseAssets: "安装资产",
    releaseDownloads: "下载量",
    releasePublished: "发布时间",
    viewRelease: "查看 Release",
    downloadAsset: "下载资产",
    downloadWindowsAsset: "下载 Windows 安装包",
    releaseHistoryEmpty: "暂时没有可显示的版本记录。",
    changelogEmpty: "暂时没有可显示的更新记录。",
    compareTitle: "版本对比",
    recentVersions: "最近版本",
    latestVsPrevious: "最新版本对比上一版本",
    previousVersion: "上一版本",
    publishGap: "发布时间差",
    downloadDelta: "下载变化",
    assetDelta: "资产变化",
    recommendedWindowsAsset: "推荐 Windows 安装包",
    noWindowsAsset: "暂未识别到明确的 Windows 安装包",
    recentVersionIntro: "最近版本卡片会优先突出 Windows 安装包和主下载入口。",
    assetName: "安装包",
    assetDownloads: "安装包下载",
    compareEmpty: "至少需要两个版本后，版本对比才会显示出来。",
    daysUnit: "天",
    sameAsPrevious: "与上一版本持平",
  },
  en: {
    loading: "Loading",
    unknown: "Pending",
    totalDownloads: "Total downloads",
    latestVersion: "Latest version",
    latestReleaseDownloads: "Latest release downloads",
    trackedReleases: "Tracked releases",
    windowsAssets: "Windows installer assets",
    downloadSource: "Source: GitHub Releases",
    cachedSource: "Showing the most recent cached GitHub Releases data.",
    unavailableSource: "Live GitHub data is temporarily unavailable. The buttons still take you to Releases.",
    releaseAssets: "Assets",
    releaseDownloads: "Downloads",
    releasePublished: "Published",
    viewRelease: "View release",
    downloadAsset: "Download asset",
    downloadWindowsAsset: "Download Windows installer",
    releaseHistoryEmpty: "No release history is available right now.",
    changelogEmpty: "No changelog items are available right now.",
    compareTitle: "Version compare",
    recentVersions: "Recent versions",
    latestVsPrevious: "Latest version versus previous version",
    previousVersion: "Previous version",
    publishGap: "Publish gap",
    downloadDelta: "Download change",
    assetDelta: "Asset change",
    recommendedWindowsAsset: "Recommended Windows installer",
    noWindowsAsset: "No clear Windows installer asset detected",
    recentVersionIntro: "Recent version cards prioritize the Windows installer and the clearest download path.",
    assetName: "Installer asset",
    assetDownloads: "Installer downloads",
    compareEmpty: "Version compare appears when at least two releases are available.",
    daysUnit: "days",
    sameAsPrevious: "Same as previous release",
  },
};

const site = {
  nav: [
    { key: "home", href: "./index.html" },
    { key: "features", href: "./features.html" },
    { key: "integrations", href: "./integrations.html" },
    { key: "download", href: "./download.html" },
    { key: "faq", href: "./faq.html" },
    {
      key: "docs",
      href: "https://hermes-agent.nousresearch.com/docs/",
      external: true,
    },
  ],
  zh: {
    brandSubtitle: "Hermes Agent 的 Windows 桌面版",
    navLabels: {
      home: "首页",
      features: "功能",
      integrations: "集成",
      download: "下载",
      faq: "常见问题",
      docs: "文档",
    },
    headerDownload: "下载 Windows 版",
    footer: {
      blurb:
        "Hermes Windos 把 Hermes Agent 变成更容易安装、更容易配置、更适合长期运行的 Windows 桌面工作台。",
      columns: [
        {
          title: "站点",
          links: [
            ["首页", "./index.html"],
            ["功能", "./features.html"],
            ["集成", "./integrations.html"],
            ["下载", "./download.html"],
            ["常见问题", "./faq.html"],
          ],
        },
        {
          title: "资源",
          links: [
            ["GitHub", "https://github.com/fathah/hermes-desktop", true],
            ["Releases", "https://github.com/fathah/hermes-desktop/releases/", true],
            ["Hermes Agent Docs", "https://hermes-agent.nousresearch.com/docs/", true],
          ],
        },
        {
          title: "定位",
          links: [
            ["Windows-first", "#", false, true],
            ["Local / Remote / SSH", "#", false, true],
            ["Agent Operations UI", "#", false, true],
          ],
        },
      ],
      copyright:
        "Hermes Windos 是围绕 Hermes Agent 构建的桌面体验层。",
    },
    screenshotCaptions: {
      chat: ["Chat", "流式聊天、工具进度和模型交互集中在一个主工作区里。"],
      office: ["Office", "为更可视化的 Agent 工作方式预留的高级操作表面。"],
      profiles: ["Profiles", "隔离不同的 Hermes 环境、配置、身份和使用场景。"],
      tools: ["Tools", "细粒度启停工具能力，让 Agent 更可控。"],
      settings: ["Settings", "集中管理 Provider、日志、更新、备份和系统状态。"],
      skills: ["Skills", "浏览、安装和管理技能，而不必手动整理目录。"],
    },
    pages: {
      home: {
        title: "Hermes Windos | Hermes Agent 的 Windows 桌面版",
        description:
          "Hermes Windos 是 Hermes Agent 的 Windows 桌面版，把安装、配置、聊天、记忆、工具、调度、网关和远程工作流收进一个控制中心。",
        hero: {
          badge: "Hermes Agent Windows Desktop",
          title: "Hermes Windos",
          subtitle: "Hermes Agent 的 Windows 桌面版",
          body: "把 Hermes Agent 的安装、配置、聊天、记忆、工具、调度、消息网关、远程连接和长期运行工作流，收进一个真正可用的桌面界面。",
          primary: ["下载 Windows 版", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["查看 GitHub", "https://github.com/fathah/hermes-desktop", true],
          link: ["阅读文档", "https://hermes-agent.nousresearch.com/docs/", true],
          support:
            "为希望拥有桌面体验、又不想牺牲 Agent 深度能力的 Hermes 用户而设计。",
          stats: [
            ["Windows 优先", "桌面入口更直接，适合把 Hermes 真正变成日常工具"],
            ["三种运行模式", "本地、远程 API、SSH 隧道统一管理"],
            ["16 种消息网关", "把 Hermes 接进消息平台和自动化渠道"],
            ["16 组工具能力", "从聊天走向可配置、可执行、可运维的 Agent"],
          ],
          aside: {
            label: "桌面控制层",
            items: [
              "引导式安装与环境验证",
              "Provider 与模型配置",
              "Gateway、Schedules、Memory、Skills",
              "本地 / 远程 / SSH 统一操作",
            ],
          },
        },
        proof: [
          ["Windows 桌面工作流", "把 CLI 项目变成桌面产品"],
          ["Local / Remote / SSH", "一套界面管理不同部署形态"],
          ["16 个消息网关", "Agent 不必只活在一个窗口里"],
          ["16 组可配置工具", "可控地启用真正需要的能力"],
        ],
        sections: {
          why: {
            kicker: "定位",
            title: "为什么它不是普通聊天壳",
            intro:
              "Hermes Windos 不是“给 Hermes Agent 套个窗口”，而是把 Hermes 变成一个更容易安装、更容易维护、更适合长期运行的桌面控制台。",
            cards: [
              [
                "不用从终端仪式感开始",
                "安装、验证、更新、诊断、备份、导入和日志查看都进入桌面流程，而不是来回切命令行和配置文件。",
              ],
              [
                "一个界面管理不同环境",
                "同一套面板覆盖本机运行、远程 API 和 SSH 隧道模式，既适合个人使用，也适合远程部署。",
              ],
              [
                "让 Hermes 变成长期系统",
                "除了聊天，还能管理调度、网关、记忆、人格、工具、技能和更持续的 Agent 工作流。",
              ],
            ],
          },
          workflows: {
            kicker: "核心流程",
            title: "用户真正想完成的，不只是发一句 Prompt",
            intro: "首页重点展示结果，而不是堆功能名。",
            cards: [
              ["引导式安装 Hermes", "通过桌面流程完成安装、验证与首轮配置。"],
              ["接入云模型或本地模型", "在 OpenRouter、Anthropic、OpenAI 与本地兼容端点之间灵活切换。"],
              ["在不同机器上操作 Hermes", "同一界面覆盖笔记本、本地服务、远程主机与 SSH 场景。"],
              ["调度任务并投递结果", "创建 Cron Job，把输出发往你已经在使用的渠道。"],
              ["塑造 Agent 的长期能力", "集中管理 Memory、Soul、Tools、Skills 与 Profiles。"],
              ["运行更高级的 Agent 流程", "通过 Kanban 与 Office 承载更复杂、更长期的工作方式。"],
            ],
          },
          features: {
            kicker: "能力地图",
            title: "运行 Hermes 所需的一整层桌面能力",
            cards: [
              ["搭建", "引导式安装", "Installer、verification、updates、backup、import、doctor、logs 全都进入桌面入口。"],
              ["工作台", "Agent Workspace", "流式聊天、Session 历史、Slash Commands、用量可见性和 Profile 切换，构成日常操作核心。"],
              ["模式", "统一 Runtime 模型", "Local、Remote API、SSH Tunnel 三种运行方式共享一致的操作逻辑。"],
              ["自动化", "Schedules 与 Delivery", "把 Agent 变成长期运行的系统，而不是一次性的对话窗口。"],
              ["可塑性", "Models / Memory / Soul / Skills", "模型、人格、记忆、技能、工具和配置都进入可视化层。"],
              ["高级流", "Kanban 与 Office", "适合更复杂的多 Agent 工作流和更可视化的操作面。"],
            ],
          },
          screenshots: {
            kicker: "界面预览",
            title: "这是一整套桌面表面，不是一个薄薄的聊天包装层",
            intro: "优先展示那些能建立“真正桌面控制台”认知的界面。",
          },
          modes: {
            kicker: "部署方式",
            title: "决定 Hermes 运行在哪里，而不是被一种模式绑住",
            cards: [
              ["本地模式", "适合注重隐私、本机使用和本地模型工作流的场景。"],
              ["远程 API 模式", "适合 Hermes 已经部署在另一台机器上，并对外暴露 API Server 的场景。"],
              ["SSH 隧道模式", "适合想要远程算力和远程环境，同时仍保留强控制感的场景。"],
            ],
          },
          integrations: {
            kicker: "生态",
            title: "为真实 Agent 运行场景而建",
            cards: [
              [
                "模型与 Provider",
                "从聚合入口、第一方 API 到本地兼容端点，都能收进同一桌面控制面。",
                ["OpenRouter", "Anthropic", "OpenAI", "Google", "xAI", "DeepSeek", "Groq", "Qwen", "MiniMax", "Hugging Face", "LM Studio", "Ollama"],
              ],
              [
                "消息网关",
                "让 Hermes 离开单一窗口，进入真实的沟通与自动化渠道。",
                ["Telegram", "Discord", "Slack", "WhatsApp", "Signal", "Matrix", "Email", "SMS", "Feishu", "WeCom", "WeChat", "Webhook"],
              ],
              [
                "操作层能力",
                "不仅能聊天，还能持续配置、调度、诊断、恢复和扩展 Hermes。",
                ["Memory", "Soul", "Skills", "Tools", "Schedules", "Gateway", "Profiles", "Backup", "Logs", "Doctor", "Kanban", "Office"],
              ],
            ],
          },
          faq: {
            kicker: "FAQ",
            title: "常见问题",
            items: [
              [
                "Hermes Windos 只是聊天界面吗？",
                "不是。它是 Hermes Agent 的桌面操作层，覆盖安装、配置、Profile、调度、网关、记忆、工具和长期运行工作流。",
              ],
              [
                "它能脱离 Hermes Agent 单独存在吗？",
                "不能。Hermes Windos 是围绕 Hermes Agent 构建的桌面应用，不是独立的 Agent Runtime。",
              ],
              [
                "可以使用本地模型吗？",
                "可以。它支持 LM Studio、Ollama、vLLM、llama.cpp 等 OpenAI-compatible 本地端点。",
              ],
              [
                "可以连接远程机器吗？",
                "可以。既支持直接远程 API 模式，也支持 SSH 隧道模式。",
              ],
              [
                "它最适合谁？",
                "适合高级用户、开发者、自动化操作者，以及希望更高效使用 Hermes Agent 的小团队。",
              ],
            ],
          },
        },
        cta: {
          kicker: "开始使用",
          title: "把 Hermes Agent 带到桌面上",
          body:
            "如果你想保留 Hermes Agent 的深度能力，同时获得更清晰、更高效、更可运维的 Windows 使用体验，就从 Hermes Windos 开始。",
          primary: ["下载 Windows 版", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["查看功能页", "./features.html"],
        },
      },
      features: {
        title: "Hermes Windos 功能总览 | 面向 Hermes Agent 的桌面控制台",
        description:
          "查看 Hermes Windos 的核心能力：引导式安装、模型与 Provider 配置、Memory、Skills、Tools、Gateway、Schedules、Kanban、Office。",
        hero: {
          badge: "Features",
          title: "Hermes Agent 上方的一整层桌面能力",
          subtitle: "不是把 CLI 窗口搬进桌面，而是补上一层真正可操作的产品界面。",
          body:
            "Hermes Windos 把安装、配置、日常操作、长期自动化和高级工作流放进同一个桌面控制面，让 Hermes Agent 更容易进入真实使用场景。",
          primary: ["下载 Windows 版", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["查看集成", "./integrations.html"],
          aside: {
            label: "本页重点",
            items: [
              "安装与可靠性",
              "日常操作工作台",
              "Memory / Soul / Skills / Tools",
              "Gateway / Schedules / Kanban / Office",
            ],
          },
        },
        groups: [
          {
            kicker: "搭建与可靠性",
            title: "先把 Hermes 安稳地跑起来",
            intro:
              "从首次启动到故障恢复，Hermes Windos 把最容易让用户卡住的环节都产品化了。",
            cards: [
              ["引导式安装", "调用 Hermes 官方安装流程，并把关键进度反馈进桌面界面。"],
              ["安装验证", "应用会检查安装状态、配置状态和 API key 状态，再决定进入欢迎页、安装页、配置页或主界面。"],
              ["更新、备份、导入、诊断", "把 update、backup、import、doctor、logs 都放进桌面操作面。"],
            ],
          },
          {
            kicker: "日常工作台",
            title: "把最常用的 Agent 操作固定下来",
            intro:
              "不只是聊天，而是一套适合长期操作的工作台结构。",
            cards: [
              ["Streaming Chat", "使用 SSE 流式输出，让回复、工具进度和使用量信息同步可见。"],
              ["Sessions 与 Search", "浏览历史会话、恢复上下文，并围绕 Hermes 的会话体系工作。"],
              ["Profiles", "隔离不同的 Hermes 环境、配置和身份，适合多场景切换。"],
            ],
          },
          {
            kicker: "可塑性层",
            title: "持续塑造 Agent 的行为与能力",
            intro:
              "Hermes Windos 最大的价值之一，是把那些原本散落在文件和命令里的“Agent 个性化层”拉进 UI。",
            cards: [
              ["Memory", "查看和编辑长期记忆、用户资料和可发现的 memory providers。"],
              ["Soul", "通过桌面界面编辑 Agent persona，而不是手改文本文件。"],
              ["Skills 与 Tools", "安装技能、启停工具能力，让 Agent 的边界更明确。"],
            ],
          },
          {
            kicker: "长期运行",
            title: "把 Hermes 从一次对话升级为系统",
            intro:
              "如果 Agent 要参与真实工作，调度、投递和远程运行就是必须的。",
            cards: [
              ["Schedules", "创建 Cron Job，让 Hermes 在固定时间运行任务。"],
              ["Gateways", "将 Hermes 接入 Telegram、Slack、Email、Webhook 等渠道。"],
              ["Remote 与 SSH", "在远程 API 和 SSH 隧道模式下继续用同一套桌面控制面。"],
            ],
          },
          {
            kicker: "高级界面",
            title: "为更复杂的 Agent 工作流预留空间",
            intro:
              "这部分是网站很值得强调的差异化信号。",
            cards: [
              ["Kanban", "面向 durable multi-agent task flow 的任务板，不是普通待办清单。"],
              ["Office", "更可视化的高级操作面，适合实验性和复杂工作流。"],
              ["性能与响应", "支持流式输出、本地 API fast path、部分页面懒加载与桌面内快速切换。"],
            ],
          },
        ],
        cta: {
          kicker: "下一步",
          title: "想看它接入什么？",
          body: "继续查看模型、网关、运行模式和操作层能力的集成范围。",
          primary: ["查看集成", "./integrations.html"],
          secondary: ["返回首页", "./index.html"],
        },
      },
      integrations: {
        title: "Hermes Windos 集成生态 | Models、Gateways、Runtime",
        description:
          "了解 Hermes Windos 支持的模型、Provider、消息网关、本地端点、远程 API 与 SSH 工作方式。",
        hero: {
          badge: "Integrations",
          title: "连接你已经在用的模型、渠道和运行环境",
          subtitle: "Hermes Windos 的意义，不是把 Agent 关进一个桌面窗，而是把它接回真实工作环境。",
          body:
            "它同时覆盖多模型接入、多平台消息网关、本地和远程运行模式，以及围绕 Hermes Agent 的关键操作层能力。",
          primary: ["下载 Windows 版", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["查看功能", "./features.html"],
          aside: {
            label: "集成维度",
            items: [
              "模型与 Provider",
              "本地兼容端点",
              "消息与自动化渠道",
              "Local / Remote / SSH Runtime",
            ],
          },
        },
        sections: {
          providers: {
            kicker: "模型侧",
            title: "从聚合路由到第一方 API，再到本地兼容端点",
            intro:
              "Hermes Windos 不把用户锁死在单一模型栈上，而是强调统一控制面。",
            cards: [
              [
                "主流 Provider",
                "OpenRouter、Anthropic、OpenAI、Google、xAI、DeepSeek、Groq、Qwen、MiniMax、Hugging Face 等。",
              ],
              [
                "OpenAI-compatible",
                "支持接入任意兼容端点，适合自托管或私有部署场景。",
              ],
              [
                "本地模型预设",
                "内置 LM Studio、Ollama、vLLM、llama.cpp 等常见本地入口。",
              ],
            ],
            pills: [
              "OpenRouter",
              "Anthropic",
              "OpenAI",
              "Google",
              "xAI",
              "DeepSeek",
              "Groq",
              "Qwen",
              "MiniMax",
              "Hugging Face",
              "LM Studio",
              "Ollama",
            ],
          },
          gateways: {
            kicker: "渠道侧",
            title: "让 Hermes 离开单一窗口",
            intro:
              "Gateway 是 Hermes Windos 最有差异化的产品信号之一，因为它让桌面应用和外部消息环境真正连上。",
            cards: [
              ["团队沟通", "Telegram、Discord、Slack、Mattermost、Feishu、WeCom。"],
              ["个人与消息", "WhatsApp、Signal、Matrix、Email、SMS、WeChat。"],
              ["系统与自动化", "Webhook、Home Assistant，以及更适合自动任务触发的入口。"],
            ],
            pills: [
              "Telegram",
              "Discord",
              "Slack",
              "WhatsApp",
              "Signal",
              "Matrix",
              "Mattermost",
              "Email",
              "SMS",
              "Feishu",
              "WeCom",
              "WeChat",
              "Webhook",
              "Home Assistant",
            ],
          },
          runtime: {
            kicker: "运行侧",
            title: "三种模式，一套心智模型",
            intro:
              "Hermes Windos 把部署复杂度降下去，让用户从本地用到远程，而不必彻底换一套操作方式。",
            cards: [
              ["Local", "本地安装、本地配置、本地模型与本机桌面体验最顺。"],
              ["Remote API", "适合 Hermes 已部署在远程机器并暴露 API 的情况。"],
              ["SSH Tunnel", "兼顾远程环境与更本地的操作感，是高级用户很重要的桥梁。"],
            ],
          },
          operator: {
            kicker: "操作层",
            title: "不只是连接，更要可运维",
            intro:
              "真正能长期使用的 Agent 桌面端，需要具备持续运行和恢复能力。",
            cards: [
              ["Logs 与 Doctor", "把诊断和排障收进桌面界面。"],
              ["Backup 与 Import", "降低跨环境迁移和意外恢复的成本。"],
              ["Profiles / Memory / Skills", "让 Agent 的上下文和能力结构长期可维护。"],
            ],
          },
        },
        cta: {
          kicker: "继续探索",
          title: "想直接开始安装？",
          body: "如果你已经理解它的模型、渠道和运行方式，下一步就是下载并完成首次配置。",
          primary: ["前往下载", "./download.html"],
          secondary: ["查看 FAQ", "./faq.html"],
        },
      },
      download: {
        title: "下载 Hermes Windos | Windows-first Hermes Agent Desktop",
        description:
          "下载 Hermes Windos，开始以 Windows 桌面方式安装、配置并运行 Hermes Agent。",
        hero: {
          badge: "Download",
          title: "下载 Hermes Windos",
          subtitle: "Windows-first 的 Hermes Agent 桌面入口",
          body:
            "如果你想更轻松地开始使用 Hermes Agent，Hermes Windos 会把安装、配置、模型接入、日志与日常操作收进一个更连贯的 Windows 桌面流程。",
          primary: ["前往 Releases", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["查看 GitHub", "https://github.com/fathah/hermes-desktop", true],
          aside: {
            label: "下载前你会得到什么",
            items: [
              "Guided install for Hermes Agent",
              "Windows 桌面工作流",
              "本地 / 远程 / SSH 支持",
              "面向长期运行的 Agent 控制面",
            ],
          },
        },
        sections: {
          cards: [
            [
              "Windows 主入口",
              "优先从 GitHub Releases 下载 Windows 安装包，适合把 Hermes Agent 变成更稳定的日常桌面工具。",
            ],
            [
              "其他平台",
              "仓库当前也提供 macOS 与 Linux 构建，但官网主叙事会聚焦 Windows-first 使用场景。",
            ],
            [
              "围绕 Hermes Agent",
              "Hermes Windos 不是独立 agent runtime，而是 Hermes Agent 的桌面体验层和控制中心。",
            ],
          ],
          steps: {
            kicker: "首次启动流程",
            title: "第一次打开时会发生什么",
            items: [
              ["01", "检查本地 Hermes 安装状态，决定进入欢迎页、安装页、配置页还是主界面。"],
              ["02", "如未安装，将引导运行 Hermes 安装流程并显示进度。"],
              ["03", "根据你的使用方式选择本地、远程 API 或 SSH 模式。"],
              ["04", "配置 Provider、模型或本地兼容端点。"],
              ["05", "进入主工作台，开始使用 Chat、Profiles、Tools、Schedules、Gateway 等能力。"],
            ],
          },
          notes: {
            kicker: "Windows 说明",
            title: "下载与安装时需要知道的几件事",
            items: [
              "Windows 安装包当前可能触发 SmartScreen 提示，因为安装器未必总是有代码签名。",
              "Hermes Windos 使用 Hermes Agent 的正式安装流程，因此首次安装会拉取较完整的运行环境。",
              "如果你已经有 Hermes Agent，也可以让应用检测并接管现有环境。",
            ],
          },
          fits: {
            kicker: "适合谁",
            title: "这类用户会最受益",
            cards: [
              ["AI Power Users", "想获得桌面便利，但仍保留 Hermes Agent 的可控性与深度能力。"],
              ["开发者", "希望用 GUI 管理本地、远程和工具化 Agent，而不是把所有操作放回终端。"],
              ["自动化操作者", "需要调度、网关、长期记忆和跨环境运行能力。"],
            ],
          },
        },
        cta: {
          kicker: "下载后去哪看",
          title: "安装之外，你可能还需要这些",
          body: "如果你希望更快完成模型接入、网关配置和长期运行设置，可以继续看功能页和文档。",
          primary: ["查看功能", "./features.html"],
          secondary: ["阅读文档", "https://hermes-agent.nousresearch.com/docs/", true],
        },
      },
      faq: {
        title: "Hermes Windos FAQ | Hermes Agent Desktop 常见问题",
        description:
          "集中查看关于 Hermes Windos 的常见问题：它与 Hermes Agent 的关系、本地模型、远程模式、SSH、Gateway、Profiles 等。",
        hero: {
          badge: "FAQ",
          title: "常见问题",
          subtitle: "把最容易疑惑的关系、边界和使用方式讲清楚",
          body:
            "Hermes Windos 的价值在于让 Hermes Agent 更容易被真正使用起来，所以 FAQ 会重点解释：它是什么、它不是什么，以及它适合怎样的工作方式。",
          primary: ["下载 Windows 版", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["返回首页", "./index.html"],
          aside: {
            label: "本页覆盖",
            items: [
              "产品定位与边界",
              "本地模型与远程模式",
              "SSH 与 Gateway",
              "Profiles / Memory / Skills / Schedules",
            ],
          },
        },
        items: [
          [
            "Hermes Windos 是什么？",
            "它是围绕 Hermes Agent 构建的 Windows 桌面体验层，负责安装、配置、控制和长期操作，而不是独立的 agent runtime。",
          ],
          [
            "它只是聊天界面吗？",
            "不是。它除了聊天，还覆盖 Models、Providers、Memory、Soul、Skills、Tools、Schedules、Gateway、Profiles、Kanban 和 Office。",
          ],
          [
            "它和 Hermes Agent 的关系是什么？",
            "Hermes Agent 提供核心 Agent 行为与运行时能力，Hermes Windos 提供更易用的桌面操作层。",
          ],
          [
            "可以使用本地模型吗？",
            "可以。它支持本地 OpenAI-compatible 端点，例如 LM Studio、Ollama、vLLM 和 llama.cpp。",
          ],
          [
            "可以连接远程服务吗？",
            "可以。你可以直接连接远程 Hermes API Server，也可以通过 SSH 隧道模式连接远程机器。",
          ],
          [
            "为什么 SSH 模式很重要？",
            "因为它让远程部署和更接近本地的操作体验同时成立，特别适合把 Hermes 跑在远程机器上的高级用户。",
          ],
          [
            "支持哪些消息平台？",
            "支持 Telegram、Discord、Slack、WhatsApp、Signal、Matrix、Email、SMS、Feishu、WeCom、WeChat、Webhook、Home Assistant 等。",
          ],
          [
            "可以做自动化任务吗？",
            "可以。你可以使用 Schedules / Cron Job 管理定时任务，并选择不同投递目标。",
          ],
          [
            "可以管理多个 Hermes 环境吗？",
            "可以。通过 Profiles 你可以隔离不同的配置、记忆、身份和使用场景。",
          ],
          [
            "它适合谁？",
            "适合 AI Power Users、开发者、自动化操作者，以及希望把 Hermes Agent 真正纳入日常流程的小团队。",
          ],
        ],
        cta: {
          kicker: "如果你已经想清楚了",
          title: "下一步就是下载并开始配置",
          body: "从下载安装开始，再逐步接入模型、网关、调度和长期运行能力。",
          primary: ["前往下载", "./download.html"],
          secondary: ["查看集成", "./integrations.html"],
        },
      },
    },
  },
  en: {
    brandSubtitle: "The Windows desktop app for Hermes Agent",
    navLabels: {
      home: "Home",
      features: "Features",
      integrations: "Integrations",
      download: "Download",
      faq: "FAQ",
      docs: "Docs",
    },
    headerDownload: "Download for Windows",
    footer: {
      blurb:
        "Hermes Windos turns Hermes Agent into a Windows desktop workspace that is easier to install, easier to configure, and better suited for long-running use.",
      columns: [
        {
          title: "Site",
          links: [
            ["Home", "./index.html"],
            ["Features", "./features.html"],
            ["Integrations", "./integrations.html"],
            ["Download", "./download.html"],
            ["FAQ", "./faq.html"],
          ],
        },
        {
          title: "Resources",
          links: [
            ["GitHub", "https://github.com/fathah/hermes-desktop", true],
            ["Releases", "https://github.com/fathah/hermes-desktop/releases/", true],
            ["Hermes Agent Docs", "https://hermes-agent.nousresearch.com/docs/", true],
          ],
        },
        {
          title: "Positioning",
          links: [
            ["Windows-first", "#", false, true],
            ["Local / Remote / SSH", "#", false, true],
            ["Agent Operations UI", "#", false, true],
          ],
        },
      ],
      copyright:
        "Hermes Windos is a desktop experience layer built around Hermes Agent.",
    },
    screenshotCaptions: {
      chat: ["Chat", "Streaming chat, tool progress, and model interaction live in one primary workspace."],
      office: ["Office", "A more visual operator surface for advanced workflows."],
      profiles: ["Profiles", "Separate Hermes environments, configurations, identities, and usage contexts."],
      tools: ["Tools", "Turn capability groups on and off with more control."],
      settings: ["Settings", "Inspect providers, logs, updates, backups, and system state from one place."],
      skills: ["Skills", "Browse, install, and manage reusable skills without hand-editing directories."],
    },
    pages: {
      home: {
        title: "Hermes Windos | The Windows desktop app for Hermes Agent",
        description:
          "Hermes Windos is the Windows desktop app for Hermes Agent, bringing setup, configuration, chat, memory, tools, schedules, gateways, and remote workflows into one control center.",
        hero: {
          badge: "Hermes Agent Windows Desktop",
          title: "Hermes Windos",
          subtitle: "The Windows desktop app for Hermes Agent",
          body: "Install, configure, and run Hermes Agent with a proper desktop interface for chat, memory, tools, schedules, gateways, remote connections, and long-running workflows.",
          primary: ["Download for Windows", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["View on GitHub", "https://github.com/fathah/hermes-desktop", true],
          link: ["Read the docs", "https://hermes-agent.nousresearch.com/docs/", true],
          support:
            "Built for Hermes Agent operators who want desktop convenience without losing agent depth.",
          stats: [
            ["Windows-first", "A clearer desktop entry point for turning Hermes into a daily tool"],
            ["Three runtime modes", "Manage local, remote API, and SSH tunnel setups with one surface"],
            ["16 gateways", "Bring Hermes into messaging and automation channels"],
            ["16 toolsets", "Move from chat into configurable, executable, operable agent work"],
          ],
          aside: {
            label: "Desktop control layer",
            items: [
              "Guided install and environment checks",
              "Provider and model configuration",
              "Gateway, schedules, memory, and skills",
              "One interface across local, remote, and SSH",
            ],
          },
        },
        proof: [
          ["Windows desktop workflow", "Turn a CLI project into a desktop product"],
          ["Local / Remote / SSH", "One interface for multiple deployment shapes"],
          ["16 messaging gateways", "Hermes does not need to live in one window"],
          ["16 configurable toolsets", "Enable only the powers you actually need"],
        ],
        sections: {
          why: {
            kicker: "Positioning",
            title: "Why it is more than a chat shell",
            intro:
              "Hermes Windos is not just a window around Hermes Agent. It is a desktop control center that makes Hermes easier to install, easier to maintain, and more viable for long-running use.",
            cards: [
              [
                "Start without terminal ceremony",
                "Install, verify, update, diagnose, back up, import, and inspect logs through a desktop workflow instead of bouncing across shell windows and config files.",
              ],
              [
                "Operate one agent across different environments",
                "Use the same control surface for local installs, remote API servers, and SSH tunnel setups.",
              ],
              [
                "Turn Hermes into a long-running system",
                "Go beyond chat by managing schedules, gateways, memory, personas, tools, skills, and more durable workflows.",
              ],
            ],
          },
          workflows: {
            kicker: "Core workflows",
            title: "What people actually want to get done",
            intro: "The homepage should communicate outcomes, not just feature names.",
            cards: [
              ["Install Hermes with guided setup", "Handle install, verification, and first-run configuration through the desktop."],
              ["Switch between cloud and local models", "Move across hosted providers and local OpenAI-compatible endpoints with less friction."],
              ["Operate Hermes across machines", "Use the same interface for your laptop, local service, remote host, or SSH setup."],
              ["Schedule jobs and route results", "Create cron-driven agent runs and deliver output into channels your team already uses."],
              ["Shape the agent over time", "Manage memory, soul, tools, skills, and profiles from a single control surface."],
              ["Run more advanced agent flows", "Use Kanban and Office for more durable and more visual operator workflows."],
            ],
          },
          features: {
            kicker: "Capability map",
            title: "A full desktop layer for operating Hermes",
            cards: [
              ["Setup", "Guided install", "Installer, verification, updates, backup, import, doctor output, and logs move into the desktop entry point."],
              ["Workspace", "Agent Workspace", "Streaming chat, session history, slash commands, usage visibility, and profile switching define the daily operating core."],
              ["Runtime", "Unified runtime model", "Local mode, remote API mode, and SSH tunnel mode share a consistent operating logic."],
              ["Automation", "Schedules and Delivery", "Turn Hermes into a long-running system rather than a one-shot conversation window."],
              ["Shaping layer", "Models / Memory / Soul / Skills", "Models, personas, memory, skills, tools, and configuration all move into a visual layer."],
              ["Advanced flows", "Kanban and Office", "Make room for more complex multi-agent workflows and more visual operator surfaces."],
            ],
          },
          screenshots: {
            kicker: "Screenshots",
            title: "A complete desktop surface, not a thin wrapper",
            intro: "Lead with the screens that make the desktop control-center story obvious.",
          },
          modes: {
            kicker: "Deployment",
            title: "Choose where Hermes runs instead of accepting one mode",
            cards: [
              ["Local mode", "Best for private desktop-first usage and local model workflows."],
              ["Remote API mode", "Best when Hermes already runs somewhere else and exposes its API server."],
              ["SSH tunnel mode", "Best when you want remote power with a more local-feeling control surface."],
            ],
          },
          integrations: {
            kicker: "Ecosystem",
            title: "Built for real-world agent operations",
            cards: [
              [
                "Models and providers",
                "From aggregation layers and first-party APIs to local compatible endpoints, everything can be pulled into one desktop control plane.",
                ["OpenRouter", "Anthropic", "OpenAI", "Google", "xAI", "DeepSeek", "Groq", "Qwen", "MiniMax", "Hugging Face", "LM Studio", "Ollama"],
              ],
              [
                "Messaging gateways",
                "Let Hermes escape the single-window chat pattern and move into real communication and automation channels.",
                ["Telegram", "Discord", "Slack", "WhatsApp", "Signal", "Matrix", "Email", "SMS", "Feishu", "WeCom", "WeChat", "Webhook"],
              ],
              [
                "Operator features",
                "It does not just chat. It lets you configure, schedule, diagnose, recover, and extend Hermes over time.",
                ["Memory", "Soul", "Skills", "Tools", "Schedules", "Gateway", "Profiles", "Backup", "Logs", "Doctor", "Kanban", "Office"],
              ],
            ],
          },
          faq: {
            kicker: "FAQ",
            title: "Common questions",
            items: [
              [
                "Is Hermes Windos just a chat UI?",
                "No. It is a desktop operations layer for Hermes Agent, including setup, configuration, profiles, schedules, gateways, memory, tools, and long-running workflows.",
              ],
              [
                "Does it replace Hermes Agent?",
                "No. Hermes Windos is the desktop app built around Hermes Agent, not a separate agent runtime.",
              ],
              [
                "Can I use local models?",
                "Yes. It supports local OpenAI-compatible endpoints such as LM Studio, Ollama, vLLM, and llama.cpp.",
              ],
              [
                "Can I connect to a remote machine?",
                "Yes. You can use direct remote API mode or connect through SSH tunnel mode.",
              ],
              [
                "Who is it for?",
                "Power users, developers, automation operators, and small teams that want Hermes Agent in a more usable desktop form.",
              ],
            ],
          },
        },
        cta: {
          kicker: "Get started",
          title: "Bring Hermes Agent onto the desktop",
          body:
            "Use Hermes Windos when you want the depth of Hermes Agent with a cleaner, faster, more operable Windows experience.",
          primary: ["Download for Windows", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["Explore features", "./features.html"],
        },
      },
      features: {
        title: "Hermes Windos Features | Desktop control layer for Hermes Agent",
        description:
          "Explore Hermes Windos features: guided setup, model and provider management, memory, skills, tools, gateway control, schedules, Kanban, and Office.",
        hero: {
          badge: "Features",
          title: "A complete desktop layer on top of Hermes Agent",
          subtitle: "Not a copied terminal window, but a real product surface for operating an agent.",
          body:
            "Hermes Windos brings setup, configuration, daily operations, long-running automation, and advanced workflows into one desktop control plane.",
          primary: ["Download for Windows", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["View integrations", "./integrations.html"],
          aside: {
            label: "On this page",
            items: [
              "Setup and reliability",
              "Daily operator workspace",
              "Memory, soul, skills, and tools",
              "Gateway, schedules, Kanban, and Office",
            ],
          },
        },
        groups: [
          {
            kicker: "Setup and reliability",
            title: "Get Hermes running in a calmer way",
            intro:
              "From the first launch to recovery work, Hermes Windos productizes the moments where users most often get stuck.",
            cards: [
              ["Guided install", "Run the upstream Hermes install flow and surface meaningful progress inside the desktop UI."],
              ["Install checks", "The app inspects install state, config state, and API key state before deciding where users should land."],
              ["Updates, backup, import, and doctor", "Move update, backup, import, doctor, and logs out of scattered shell commands and into one desktop layer."],
            ],
          },
          {
            kicker: "Daily workspace",
            title: "Lock the common operator loops into place",
            intro:
              "The point is not only to talk to Hermes, but to make repeated operation smoother over time.",
            cards: [
              ["Streaming chat", "Use SSE-driven chat so responses, tool progress, and usage information stay visible as the run unfolds."],
              ["Sessions and search", "Browse history, resume context, and keep working with Hermes through a session-aware interface."],
              ["Profiles", "Separate environments, identities, configs, and usage contexts instead of forcing everything into one agent state."],
            ],
          },
          {
            kicker: "Shaping layer",
            title: "Keep shaping the agent instead of re-explaining yourself",
            intro:
              "One of the strongest product advantages is that it pulls the agent-shaping layer into the UI.",
            cards: [
              ["Memory", "View and edit long-term memory, user profile data, and discoverable memory providers."],
              ["Soul", "Adjust persona through the desktop instead of hand-editing files in the background."],
              ["Skills and tools", "Install skills and toggle tool capability groups so the agent stays legible and controllable."],
            ],
          },
          {
            kicker: "Long-running operations",
            title: "Move from chat sessions to real operating loops",
            intro:
              "If Hermes is going to participate in real work, schedules, delivery, and remote operation are mandatory.",
            cards: [
              ["Schedules", "Create cron-driven runs so Hermes can act on a recurring cadence."],
              ["Gateways", "Push Hermes into Telegram, Slack, Email, Webhook, and other channels."],
              ["Remote and SSH", "Keep the same desktop surface even when the agent lives elsewhere."],
            ],
          },
          {
            kicker: "Advanced surfaces",
            title: "Leave room for higher-order agent workflows",
            intro:
              "This is where the product starts to feel notably different from generic AI desktop shells.",
            cards: [
              ["Kanban", "Use a durable multi-agent task board rather than a disposable todo list."],
              ["Office", "Open a more visual operator surface for experimental and richer workflows."],
              ["Performance-minded flow", "Lean on streaming responses, a local API fast path, lazy-mounted screens, and desktop-first switching."],
            ],
          },
        ],
        cta: {
          kicker: "Next",
          title: "Want to see what it connects to?",
          body: "Continue into models, gateways, runtime modes, and the integration surface around Hermes.",
          primary: ["View integrations", "./integrations.html"],
          secondary: ["Back to home", "./index.html"],
        },
      },
      integrations: {
        title: "Hermes Windos Integrations | Models, gateways, and runtime modes",
        description:
          "See the integration surface around Hermes Windos: providers, local endpoints, messaging gateways, remote APIs, SSH, and operator controls.",
        hero: {
          badge: "Integrations",
          title: "Connect the models, channels, and environments you already use",
          subtitle: "The point is not to trap Hermes in one desktop window, but to reconnect it to real work.",
          body:
            "Hermes Windos covers multi-provider model access, message gateways, local and remote runtime modes, and the operator layer required to keep Hermes usable over time.",
          primary: ["Download for Windows", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["View features", "./features.html"],
          aside: {
            label: "Integration layers",
            items: [
              "Models and providers",
              "Local-compatible endpoints",
              "Messaging and automation channels",
              "Local, remote, and SSH runtime topologies",
            ],
          },
        },
        sections: {
          providers: {
            kicker: "Model side",
            title: "From aggregator routes and first-party APIs to local endpoints",
            intro:
              "Hermes Windos avoids locking the user into one model stack and instead emphasizes a unified control plane.",
            cards: [
              ["Main providers", "OpenRouter, Anthropic, OpenAI, Google, xAI, DeepSeek, Groq, Qwen, MiniMax, Hugging Face, and more."],
              ["OpenAI-compatible access", "Use arbitrary compatible endpoints for self-hosted and private deployment scenarios."],
              ["Local presets", "Built-in expectations for LM Studio, Ollama, vLLM, and llama.cpp."],
            ],
            pills: [
              "OpenRouter",
              "Anthropic",
              "OpenAI",
              "Google",
              "xAI",
              "DeepSeek",
              "Groq",
              "Qwen",
              "MiniMax",
              "Hugging Face",
              "LM Studio",
              "Ollama",
            ],
          },
          gateways: {
            kicker: "Channel side",
            title: "Let Hermes leave the single-window pattern",
            intro:
              "Gateway support is one of the clearest differentiators because it reconnects the desktop app to real communication and automation surfaces.",
            cards: [
              ["Team communication", "Telegram, Discord, Slack, Mattermost, Feishu, and WeCom."],
              ["Personal and messaging", "WhatsApp, Signal, Matrix, Email, SMS, and WeChat."],
              ["System and automation", "Webhook, Home Assistant, and channels better suited for automated delivery."],
            ],
            pills: [
              "Telegram",
              "Discord",
              "Slack",
              "WhatsApp",
              "Signal",
              "Matrix",
              "Mattermost",
              "Email",
              "SMS",
              "Feishu",
              "WeCom",
              "WeChat",
              "Webhook",
              "Home Assistant",
            ],
          },
          runtime: {
            kicker: "Runtime side",
            title: "Three modes, one mental model",
            intro:
              "Hermes Windos reduces deployment friction so users can move from local experiments to remote operation without swapping tools entirely.",
            cards: [
              ["Local", "Best for private desktop-first usage and local model workflows."],
              ["Remote API", "Best when Hermes already runs elsewhere and exposes its API server."],
              ["SSH tunnel", "Best when you want remote power with a more local-feeling control surface."],
            ],
          },
          operator: {
            kicker: "Operator layer",
            title: "Connections are not enough without operability",
            intro:
              "A site about Hermes Windos should also highlight the recovery and maintenance layer around those integrations.",
            cards: [
              ["Logs and doctor", "Pull diagnostics and troubleshooting back into the desktop interface."],
              ["Backup and import", "Lower the cost of recovery, migration, and experimentation across environments."],
              ["Profiles, memory, and skills", "Keep the agent's context and capability shape maintainable over time."],
            ],
          },
        },
        cta: {
          kicker: "Keep going",
          title: "Ready to install it?",
          body: "If the models, channels, and runtime modes make sense, the next step is the Windows download and first-run flow.",
          primary: ["Go to download", "./download.html"],
          secondary: ["Open FAQ", "./faq.html"],
        },
      },
      download: {
        title: "Download Hermes Windos | Windows-first Hermes Agent desktop",
        description:
          "Download Hermes Windos and start installing, configuring, and operating Hermes Agent through a Windows desktop workflow.",
        hero: {
          badge: "Download",
          title: "Download Hermes Windos",
          subtitle: "A Windows-first entry point into Hermes Agent",
          body:
            "If you want an easier way to start using Hermes Agent, Hermes Windos brings install, configuration, model access, logs, and daily operations into a more coherent Windows desktop flow.",
          primary: ["Open Releases", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["View on GitHub", "https://github.com/fathah/hermes-desktop", true],
          aside: {
            label: "What you get before the first run",
            items: [
              "Guided install for Hermes Agent",
              "Windows desktop workflow",
              "Local, remote, and SSH support",
              "A control surface built for long-running use",
            ],
          },
        },
        sections: {
          cards: [
            [
              "Windows primary path",
              "The clearest entry point is the Windows installer from GitHub Releases, designed for turning Hermes Agent into a more stable daily desktop tool.",
            ],
            [
              "Other platforms exist",
              "The repository also ships macOS and Linux builds, but the public story here stays focused on the Windows-first experience.",
            ],
            [
              "Built around Hermes Agent",
              "Hermes Windos is not a separate agent runtime. It is the desktop experience layer and control center around Hermes Agent.",
            ],
          ],
          steps: {
            kicker: "First launch flow",
            title: "What happens when you open it the first time",
            items: [
              ["01", "It checks local Hermes install state and decides whether to land on welcome, install, setup, or the main workspace."],
              ["02", "If Hermes is not installed yet, the app guides the install flow and surfaces progress."],
              ["03", "You choose whether to work in local mode, remote API mode, or SSH mode."],
              ["04", "You configure providers, models, or local-compatible endpoints."],
              ["05", "You enter the main workspace and start using chat, profiles, tools, schedules, gateway, and more."],
            ],
          },
          notes: {
            kicker: "Windows notes",
            title: "Things worth knowing before or during install",
            items: [
              "The Windows installer may trigger SmartScreen prompts because code-signing can vary by build.",
              "Hermes Windos leans on the official Hermes Agent install flow, so first-run setup can pull a fuller runtime environment.",
              "If you already have Hermes Agent installed, the app can detect and adopt that existing environment.",
            ],
          },
          fits: {
            kicker: "Best fit",
            title: "Who gets the most value",
            cards: [
              ["AI power users", "People who want desktop convenience without giving up Hermes Agent depth."],
              ["Developers", "People who want a GUI for local, remote, and tool-using agent work instead of pushing everything back into the shell."],
              ["Automation operators", "People who need schedules, gateways, long-term memory, and cross-environment control."],
            ],
          },
        },
        cta: {
          kicker: "After install",
          title: "You will probably want these next",
          body: "Once the installer is clear, the next useful step is understanding features, integrations, and the desktop operating model.",
          primary: ["View features", "./features.html"],
          secondary: ["Read docs", "https://hermes-agent.nousresearch.com/docs/", true],
        },
      },
      faq: {
        title: "Hermes Windos FAQ | Common questions about the Hermes Agent desktop",
        description:
          "Get quick answers about Hermes Windos: what it is, how it relates to Hermes Agent, local models, remote APIs, SSH, gateways, profiles, and schedules.",
        hero: {
          badge: "FAQ",
          title: "Common questions",
          subtitle: "Clarify the product boundary, runtime model, and the way this desktop layer fits into Hermes Agent.",
          body:
            "The value of Hermes Windos is that it helps people actually use Hermes Agent. That makes it worth being explicit about what it is, what it is not, and which workflows it serves best.",
          primary: ["Download for Windows", "https://github.com/fathah/hermes-desktop/releases/", true],
          secondary: ["Back to home", "./index.html"],
          aside: {
            label: "This page covers",
            items: [
              "Product boundary and positioning",
              "Local models and remote modes",
              "SSH and gateways",
              "Profiles, memory, skills, and schedules",
            ],
          },
        },
        items: [
          [
            "What is Hermes Windos?",
            "It is a Windows desktop experience layer around Hermes Agent, responsible for install, configuration, control, and long-running operation rather than acting as a separate runtime.",
          ],
          [
            "Is it just a chat UI?",
            "No. It also covers models, providers, memory, soul, skills, tools, schedules, gateway control, profiles, Kanban, and Office.",
          ],
          [
            "How does it relate to Hermes Agent?",
            "Hermes Agent provides the core agent behavior and runtime capabilities. Hermes Windos provides the desktop operations layer around it.",
          ],
          [
            "Can I use local models?",
            "Yes. It supports local OpenAI-compatible endpoints such as LM Studio, Ollama, vLLM, and llama.cpp.",
          ],
          [
            "Can I connect to remote services?",
            "Yes. You can point it at a remote Hermes API server or operate through SSH tunnel mode."],
          [
            "Why does SSH mode matter?",
            "Because it makes remote deployment and a more local-feeling control surface coexist, which matters a lot for advanced users running Hermes elsewhere.",
          ],
          [
            "Which messaging platforms are supported?",
            "Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Email, SMS, Feishu, WeCom, WeChat, Webhook, Home Assistant, and more.",
          ],
          [
            "Can it run automations?",
            "Yes. You can manage schedules and cron-style jobs, then deliver results into selected channels.",
          ],
          [
            "Can I manage multiple Hermes environments?",
            "Yes. Profiles let you isolate different configurations, memories, identities, and usage contexts.",
          ],
          [
            "Who is it best for?",
            "AI power users, developers, automation operators, and small teams that want to make Hermes Agent easier to use every day.",
          ],
        ],
        cta: {
          kicker: "If it all clicks now",
          title: "The next step is download and setup",
          body: "Start with the Windows download, then layer in models, gateways, schedules, and longer-running workflows.",
          primary: ["Go to download", "./download.html"],
          secondary: ["View integrations", "./integrations.html"],
        },
      },
    },
  },
};

site.nav = [
  { key: "home", href: "./index.html" },
  { key: "features", href: "./features.html" },
  { key: "integrations", href: "./integrations.html" },
  { key: "download", href: "./download.html" },
  { key: "updates", href: "./updates.html" },
  { key: "roadmap", href: "./roadmap.html" },
  { key: "docs", href: "./docs.html" },
  { key: "faq", href: "./faq.html" },
];

Object.assign(site.zh.navLabels, {
  updates: "更新",
  roadmap: "路线图",
  docs: "文档入口",
});

Object.assign(site.en.navLabels, {
  updates: "Updates",
  roadmap: "Roadmap",
  docs: "Docs",
});

site.zh.footer.columns[0].links = [
  ["首页", "./index.html"],
  ["功能", "./features.html"],
  ["集成", "./integrations.html"],
  ["下载", "./download.html"],
  ["更新", "./updates.html"],
  ["路线图", "./roadmap.html"],
  ["文档入口", "./docs.html"],
  ["常见问题", "./faq.html"],
];

site.en.footer.columns[0].links = [
  ["Home", "./index.html"],
  ["Features", "./features.html"],
  ["Integrations", "./integrations.html"],
  ["Download", "./download.html"],
  ["Updates", "./updates.html"],
  ["Roadmap", "./roadmap.html"],
  ["Docs", "./docs.html"],
  ["FAQ", "./faq.html"],
];

site.zh.footer.columns[1].links = [
  ["文档入口", "./docs.html"],
  ["版本历史", "./releases.html"],
  ["GitHub", "https://github.com/fathah/hermes-desktop", true],
  ["Releases", "https://github.com/fathah/hermes-desktop/releases/", true],
  ["Hermes Agent Docs", "https://hermes-agent.nousresearch.com/docs/", true],
];

site.en.footer.columns[1].links = [
  ["Docs hub", "./docs.html"],
  ["Release history", "./releases.html"],
  ["GitHub", "https://github.com/fathah/hermes-desktop", true],
  ["Releases", "https://github.com/fathah/hermes-desktop/releases/", true],
  ["Hermes Agent Docs", "https://hermes-agent.nousresearch.com/docs/", true],
];

site.zh.pages.home.hero.showDownloadStats = true;
site.en.pages.home.hero.showDownloadStats = true;

site.zh.pages.download.hero.showDownloadStats = true;
site.zh.pages.download.hero.secondary = ["版本历史", "./releases.html"];
site.zh.pages.download.hero.link = ["查看 GitHub", "https://github.com/fathah/hermes-desktop", true];
site.zh.pages.download.sections.live = {
  kicker: "下载统计",
  title: "把版本、安装资产和下载趋势放在下载页正中间",
  intro:
    "下载页除了按钮本身，还应该让用户清楚自己要下哪个版本、最近更新到了哪里，以及当前安装入口是否还在持续维护。",
};
site.zh.pages.download.cta = {
  kicker: "下一步",
  title: "安装说明、版本历史和更新日志一起看会更顺",
  body: "如果你希望更快完成模型接入、网关配置和长期运行设置，建议继续看版本历史、更新日志和文档入口。",
  primary: ["查看版本历史", "./releases.html"],
  secondary: ["查看更新日志", "./updates.html"],
  link: ["文档入口", "./docs.html"],
};

site.en.pages.download.hero.showDownloadStats = true;
site.en.pages.download.hero.secondary = ["Release history", "./releases.html"];
site.en.pages.download.hero.link = ["View on GitHub", "https://github.com/fathah/hermes-desktop", true];
site.en.pages.download.sections.live = {
  kicker: "Live download signal",
  title: "Put version, installer assets, and release momentum directly on the download page",
  intro:
    "The download page should do more than expose a button. It should clarify which version people are getting, how current the Windows path is, and where the release history lives.",
};
site.en.pages.download.cta = {
  kicker: "What next",
  title: "Install instructions, release history, and changelog work better together",
  body: "After the installer path is clear, the next useful pages are release history, updates, and the docs hub.",
  primary: ["View release history", "./releases.html"],
  secondary: ["View updates", "./updates.html"],
  link: ["Docs hub", "./docs.html"],
};

site.zh.pages.faq.hero.link = ["文档入口", "./docs.html"];
site.en.pages.faq.hero.link = ["Docs hub", "./docs.html"];

Object.assign(site.zh.pages, {
  releases: {
    title: "Hermes Windos 版本历史 | Windows 下载版本与构建记录",
    description:
      "查看 Hermes Windos 的下载版本历史、Windows 安装资产、最近发布节奏和构建入口。",
    hero: {
      badge: "Release History",
      title: "下载版本历史",
      subtitle: "把最新版本、历史构建和下载入口讲清楚",
      body:
        "如果下载页负责把用户带到安装入口，版本历史页就负责解释当前有哪些版本、最近更新频率如何，以及 Windows 用户应该优先关注什么。",
      primary: ["前往 Releases", "https://github.com/fathah/hermes-desktop/releases/", true],
      secondary: ["查看更新日志", "./updates.html"],
      link: ["返回下载页", "./download.html"],
      showDownloadStats: true,
      aside: {
        label: "本页重点",
        items: [
          "最新版本与发布时间",
          "累计下载与最新版本下载",
          "Windows 安装资产入口",
          "历史版本的持续可见性",
        ],
      },
    },
    sections: {
      summary: {
        kicker: "版本信号",
        title: "先看下载面板最关心的数据",
        intro: "这里会优先显示累计下载、最新版本、已追踪版本数量和 Windows 安装资产数量。",
      },
      history: {
        kicker: "版本列表",
        title: "最新版本和历史构建",
        intro: "优先展示可下载的版本记录，帮助官网访客快速判断项目活跃度和版本轨迹。",
      },
      channels: {
        kicker: "下载路径",
        title: "推荐把下载逻辑分成三个入口",
        intro: "按钮布局不只是视觉问题，更是降低决策成本。",
        cards: [
          ["最新版本", "默认把主按钮交给最新 Release，适合第一次安装 Hermes Windos 的 Windows 用户。"],
          ["版本历史", "给想回退、比对或验证兼容性的用户一个清晰入口。"],
          ["GitHub 仓库", "让开发者和高级用户快速跳去源码、Issues、Actions 和项目上下文。"],
        ],
      },
      notes: {
        kicker: "发布说明",
        title: "版本页应该补充的上下文",
        items: [
          "Windows 用户通常最关心当前安装资产是不是最新、是不是仍在更新。",
          "版本历史页的目标不是复述 README，而是减少用户在下载前的犹豫。",
          "如果 GitHub 实时数据暂时不可用，页面仍然保留 Releases 主入口和最近缓存数据提示。",
        ],
      },
    },
    cta: {
      kicker: "继续往下看",
      title: "看完版本，再去看更新日志和安装说明",
      body: "版本历史适合确认下载路径，更新日志适合理解产品变化，下载页适合完成实际安装决策。",
      primary: ["查看更新日志", "./updates.html"],
      secondary: ["返回下载页", "./download.html"],
      link: ["文档入口", "./docs.html"],
      showDownloadStats: true,
    },
  },
  updates: {
    title: "Hermes Windos 更新日志 | 最近版本变化与产品进展",
    description:
      "查看 Hermes Windos 的更新日志、最近版本变化、持续优化方向和下载安装入口。",
    hero: {
      badge: "Changelog",
      title: "更新日志",
      subtitle: "把版本变化翻译成用户能理解的产品进展",
      body:
        "更新日志页不只是列出 tag，而是帮助访客理解这个 Windows 桌面层最近在变什么、变得更适合谁，以及下一步应该去哪里下载或继续阅读文档。",
      primary: ["下载最新版本", "https://github.com/fathah/hermes-desktop/releases/", true],
      secondary: ["查看版本历史", "./releases.html"],
      link: ["路线图", "./roadmap.html"],
      showDownloadStats: true,
      aside: {
        label: "更新页重点",
        items: [
          "最近发布节奏",
          "最新版本摘要",
          "变化对 Windows 用户的意义",
          "从更新到下载的顺滑路径",
        ],
      },
    },
    sections: {
      feed: {
        kicker: "最新记录",
        title: "最近发布与更新摘要",
        intro: "这里优先展示最近版本的摘要、发布时间和下载入口。",
      },
      themes: {
        kicker: "官网表达",
        title: "官网里的更新日志更适合强调三种内容",
        intro: "与仓库原始 release note 相比，官网版本更适合面向非开发者读者。",
        cards: [
          ["安装体验", "有哪些变化会直接影响首次安装、升级或恢复流程。"],
          ["控制台能力", "哪些变化会影响 Profiles、Memory、Tools、Schedules、Gateway 等日常操作。"],
          ["Windows 叙事", "哪些变化能强化 Hermes Windos 作为 Windows-first 入口的产品定位。"],
        ],
      },
      notes: {
        kicker: "页面意图",
        title: "更新日志不是 changelog dump",
        items: [
          "如果 GitHub Release Note 很技术化，官网摘要应该帮用户做一次翻译。",
          "更新日志页和版本历史页可以互相跳转，但目标不同：一个看变化，一个看可下载版本。",
          "主下载按钮始终保留在页面上，避免用户读完更新后还要重新找安装入口。",
        ],
      },
    },
    cta: {
      kicker: "继续浏览",
      title: "如果你想知道后面准备做什么，就去看路线图",
      body: "更新日志负责解释刚发生了什么，路线图负责解释接下来会优先建设什么。",
      primary: ["查看路线图", "./roadmap.html"],
      secondary: ["文档入口", "./docs.html"],
      link: ["返回下载页", "./download.html"],
      showDownloadStats: true,
    },
  },
  roadmap: {
    title: "Hermes Windos 路线图 | 官网定位、产品方向与后续建设",
    description:
      "查看 Hermes Windos 的官网路线图与产品方向，包括下载体验、桌面操作层、集成能力和文档入口建设。",
    hero: {
      badge: "Roadmap",
      title: "路线图",
      subtitle: "明确这个 Windows 桌面站点后面还会长成什么样",
      body:
        "路线图页的作用不是承诺具体日期，而是把建设重点讲清楚，让用户理解 Hermes Windos 会如何继续强化下载体验、桌面操作层和长期运行能力。",
      primary: ["文档入口", "./docs.html"],
      secondary: ["返回首页", "./index.html"],
      link: ["下载页", "./download.html"],
      aside: {
        label: "路线图主线",
        items: [
          "下载体验更清晰",
          "桌面能力表达更完整",
          "集成与远程运行说明更强",
          "文档入口与官网路径打通",
        ],
      },
    },
    groups: [
      {
        kicker: "Now",
        title: "当前优先级",
        intro: "官网和产品叙事的第一层应该先把入口和定位站稳。",
        cards: [
          ["下载入口", "持续优化下载页、版本历史、更新日志和按钮布局，让 Windows 用户快速完成安装决策。"],
          ["产品定位", "反复强化 Hermes Windos 不是聊天壳，而是 Hermes Agent 的 Windows 桌面控制层。"],
          ["关键功能说明", "把 Profiles、Memory、Skills、Tools、Schedules、Gateway、SSH 等重点能力讲得更直接。"],
        ],
      },
      {
        kicker: "Next",
        title: "下一阶段",
        intro: "在主站站稳后，开始补更强的内容结构。",
        cards: [
          ["功能分解", "继续拆出更详细的 workflow 页面，例如本地模式、远程模式、SSH 模式与 Gateway 页面。"],
          ["案例与截图", "把更多真实界面截图、安装流程图和典型工作流案例放进官网。"],
          ["升级路径", "解释从 Hermes Agent CLI 使用者过渡到桌面工作流的具体收益。"],
        ],
      },
      {
        kicker: "Later",
        title: "更后面的方向",
        intro: "当站点内容更稳定后，再考虑更高级的官网层能力。",
        cards: [
          ["版本对比", "按版本维度列出关键变化，让用户更快理解升级价值。"],
          ["下载分析", "如果后面有更稳定的数据源，可以把下载趋势做成更完整的统计可视化。"],
          ["生态入口", "把文档、仓库、Issue、Release、Roadmap 和教程做成更清楚的资源网络。"],
        ],
      },
    ],
    cta: {
      kicker: "资源入口",
      title: "路线图之后，最自然的下一站是文档入口",
      body: "路线图回答方向问题，文档入口回答如何上手、如何继续配置、如何深入使用。",
      primary: ["文档入口", "./docs.html"],
      secondary: ["查看更新日志", "./updates.html"],
    },
  },
  docs: {
    title: "Hermes Windos 文档入口 | 下载、官方文档、仓库与资源导航",
    description:
      "进入 Hermes Windos 文档入口页，统一前往下载、官方文档、GitHub 仓库、版本历史、更新日志与路线图。",
    hero: {
      badge: "Docs Hub",
      title: "文档入口",
      subtitle: "把下载、官方文档、版本、路线图和仓库入口统一收进一个页面",
      body:
        "文档入口页的工作不是重复官方文档，而是帮 Hermes Windos 官网访客找到下一步最合适的资源路径：下载、安装、理解功能、查看更新，或者直接进入官方文档与仓库。",
      primary: ["打开官方文档", "https://hermes-agent.nousresearch.com/docs/", true],
      secondary: ["前往下载页", "./download.html"],
      link: ["查看版本历史", "./releases.html"],
      aside: {
        label: "你能从这里去到",
        items: [
          "Hermes Agent 官方文档",
          "Windows 下载与版本历史",
          "更新日志与路线图",
          "GitHub 仓库与 Release 页面",
        ],
      },
    },
    sections: {
      entry: {
        kicker: "入口分层",
        title: "官网里的文档入口更适合做成四类路径",
        intro: "让用户先选任务，再跳去合适的资源。",
        cards: [
          {
            eyebrow: "Install",
            title: "下载与安装",
            body: "进入下载页和版本历史，先完成 Windows 安装决策，再决定是否需要查看历史版本。",
            label: "前往下载页",
            href: "./download.html",
          },
          {
            eyebrow: "Learn",
            title: "功能与集成",
            body: "先看功能页和集成页，快速理解这个桌面控制层到底覆盖哪些能力。",
            label: "查看功能页",
            href: "./features.html",
          },
          {
            eyebrow: "Official",
            title: "官方文档",
            body: "当你需要更详细的安装、配置和运行说明时，直接进入 Hermes Agent 官方文档。",
            label: "打开官方文档",
            href: "https://hermes-agent.nousresearch.com/docs/",
            external: true,
          },
          {
            eyebrow: "Source",
            title: "GitHub 仓库与 Releases",
            body: "面向开发者与高级用户，快速进入源码、Issues、Release 页面和更底层的项目上下文。",
            label: "查看 GitHub",
            href: "https://github.com/fathah/hermes-desktop",
            external: true,
          },
        ],
      },
      guides: {
        kicker: "推荐路径",
        title: "如果你不知道先看哪页，可以直接按任务走",
        intro: "这能减少用户在官网里来回跳转。",
        cards: [
          ["我要下载", "先看下载页，再看版本历史。"],
          ["我要看最近变了什么", "先看更新日志，再决定是否去看版本历史或直接下载。"],
          ["我要评估这个产品能不能满足我", "先看功能页和集成页，再看 FAQ。"],
        ],
      },
    },
    cta: {
      kicker: "从这里继续",
      title: "下载、更新、路线图都已经接进来了",
      body: "如果你准备开始安装，就去下载页；如果你准备继续研究，就从功能、集成、更新和 FAQ 往下看。",
      primary: ["前往下载页", "./download.html"],
      secondary: ["查看更新日志", "./updates.html"],
    },
  },
});

Object.assign(site.en.pages, {
  releases: {
    title: "Hermes Windos Release History | Windows downloads and build records",
    description:
      "Review Hermes Windos release history, Windows installer assets, recent release cadence, and download entry points.",
    hero: {
      badge: "Release History",
      title: "Release history",
      subtitle: "Clarify the latest version, older builds, and the right download path",
      body:
        "If the download page gets people to the installer, the release history page explains which versions exist, how recently the project shipped, and what Windows users should pay attention to.",
      primary: ["Open Releases", "https://github.com/fathah/hermes-desktop/releases/", true],
      secondary: ["View updates", "./updates.html"],
      link: ["Back to download", "./download.html"],
      showDownloadStats: true,
      aside: {
        label: "On this page",
        items: [
          "Latest version and publish date",
          "Total downloads and latest release downloads",
          "Windows installer asset entry points",
          "Visibility into older builds",
        ],
      },
    },
    sections: {
      summary: {
        kicker: "Release signals",
        title: "Start with the numbers people care about most",
        intro: "This area prioritizes total downloads, latest version, tracked release count, and Windows installer assets.",
      },
      history: {
        kicker: "Release list",
        title: "Recent versions and historical builds",
        intro: "The point is to surface downloadable history so visitors can judge activity and version shape quickly.",
      },
      channels: {
        kicker: "Download paths",
        title: "The cleanest download story usually has three buttons",
        intro: "Button layout is not only visual. It reduces decision friction.",
        cards: [
          ["Latest release", "Give the primary button to the newest Release for first-time Windows installs."],
          ["Release history", "Give rollback, comparison, and compatibility-minded users a clear second path."],
          ["GitHub repository", "Give developers and advanced users fast access to source, issues, actions, and context."],
        ],
      },
      notes: {
        kicker: "Release notes",
        title: "Context that makes the version page more useful",
        items: [
          "Windows users usually care first about whether the installer path is current and still maintained.",
          "The release history page should reduce hesitation before download instead of repeating the README.",
          "If live GitHub data is temporarily unavailable, the page still preserves the Releases entry point and cached signal.",
        ],
      },
    },
    cta: {
      kicker: "Keep going",
      title: "After versions, the next useful pages are updates and install guidance",
      body: "Release history answers what is downloadable. Updates explain what changed. The download page closes the install decision.",
      primary: ["View updates", "./updates.html"],
      secondary: ["Back to download", "./download.html"],
      link: ["Docs hub", "./docs.html"],
      showDownloadStats: true,
    },
  },
  updates: {
    title: "Hermes Windos Updates | Recent release changes and product progress",
    description:
      "See recent Hermes Windos updates, release changes, product progress, and the path back to the Windows download.",
    hero: {
      badge: "Changelog",
      title: "Updates",
      subtitle: "Translate version changes into product progress people can actually read",
      body:
        "The website changelog should do more than dump tags. It should help visitors understand what changed in this Windows desktop layer, who benefits, and where to download next.",
      primary: ["Download latest release", "https://github.com/fathah/hermes-desktop/releases/", true],
      secondary: ["View release history", "./releases.html"],
      link: ["Roadmap", "./roadmap.html"],
      showDownloadStats: true,
      aside: {
        label: "This page focuses on",
        items: [
          "Recent release cadence",
          "Latest release summaries",
          "Why changes matter for Windows users",
          "A smoother path from updates to download",
        ],
      },
    },
    sections: {
      feed: {
        kicker: "Latest entries",
        title: "Recent releases and update summaries",
        intro: "This section prioritizes recent release summaries, publish dates, and the download entry point.",
      },
      themes: {
        kicker: "Website framing",
        title: "Three things a website changelog should emphasize",
        intro: "Compared with raw repository release notes, the website version should help non-developer readers faster.",
        cards: [
          ["Install experience", "Which changes affect first-run setup, upgrades, or recovery flow directly."],
          ["Control surface", "Which changes affect profiles, memory, tools, schedules, gateway control, and daily operation."],
          ["Windows narrative", "Which changes strengthen Hermes Windos as the Windows-first entry point into Hermes Agent."],
        ],
      },
      notes: {
        kicker: "Page intent",
        title: "The changelog page should not be a dump",
        items: [
          "If GitHub release notes are highly technical, the website summary should translate them.",
          "Updates and release history can link to each other, but they serve different user questions.",
          "Keep the primary download path visible so users do not need to hunt for the installer after reading updates.",
        ],
      },
    },
    cta: {
      kicker: "Next page",
      title: "If you want to know what comes after recent updates, open the roadmap",
      body: "Updates explain what just happened. The roadmap explains what the site and product are trying to build next.",
      primary: ["View roadmap", "./roadmap.html"],
      secondary: ["Docs hub", "./docs.html"],
      link: ["Back to download", "./download.html"],
      showDownloadStats: true,
    },
  },
  roadmap: {
    title: "Hermes Windos Roadmap | Site direction, product framing, and next steps",
    description:
      "See the Hermes Windos roadmap around download experience, desktop operations framing, integrations, and the docs hub.",
    hero: {
      badge: "Roadmap",
      title: "Roadmap",
      subtitle: "Make it clear what this Windows desktop site still needs to grow into",
      body:
        "The roadmap page does not need to promise exact dates. It needs to explain where the project wants to invest next across download experience, operator depth, integrations, and documentation paths.",
      primary: ["Docs hub", "./docs.html"],
      secondary: ["Back to home", "./index.html"],
      link: ["Download page", "./download.html"],
      aside: {
        label: "Roadmap tracks",
        items: [
          "Clearer download journeys",
          "Stronger desktop capability framing",
          "Better integration and remote-mode explanation",
          "A tighter bridge between site and docs",
        ],
      },
    },
    groups: [
      {
        kicker: "Now",
        title: "Current priorities",
        intro: "The first layer should stabilize entry points and product positioning.",
        cards: [
          ["Download journey", "Keep improving the download page, release history, updates, and button layout so Windows users can make an install decision fast."],
          ["Product positioning", "Repeat that Hermes Windos is not a chat shell but a Windows desktop control layer around Hermes Agent."],
          ["Key capability framing", "Make profiles, memory, skills, tools, schedules, gateway control, and SSH easier to understand at a glance."],
        ],
      },
      {
        kicker: "Next",
        title: "What should come next",
        intro: "Once the main site structure is stable, the next layer is deeper content.",
        cards: [
          ["Workflow pages", "Break out stronger pages for local mode, remote mode, SSH mode, and gateway-oriented workflows."],
          ["Screens and examples", "Add more real UI screenshots, install flow visuals, and workflow examples."],
          ["Upgrade path", "Explain the benefit of moving from Hermes Agent CLI usage into a desktop workflow."],
        ],
      },
      {
        kicker: "Later",
        title: "Longer-range opportunities",
        intro: "These are higher-order improvements once the content structure is stronger.",
        cards: [
          ["Version comparisons", "Highlight upgrade value by contrasting major version changes more directly."],
          ["Download analytics", "If a more stable data source appears later, expand the download signal into fuller analytics."],
          ["Resource graph", "Turn docs, repo, issues, releases, roadmap, and tutorials into a more explicit resource network."],
        ],
      },
    ],
    cta: {
      kicker: "Resource path",
      title: "After roadmap, the most natural next page is the docs hub",
      body: "Roadmap answers direction. The docs hub answers where to go for install, setup, usage, and deeper resources.",
      primary: ["Docs hub", "./docs.html"],
      secondary: ["View updates", "./updates.html"],
    },
  },
  docs: {
    title: "Hermes Windos Docs Hub | Downloads, docs, repo, and resource entry points",
    description:
      "Use the Hermes Windos docs hub to reach downloads, official docs, GitHub, release history, updates, roadmap, and support pages.",
    hero: {
      badge: "Docs Hub",
      title: "Docs hub",
      subtitle: "Put downloads, official docs, versions, roadmap, and repository links into one page",
      body:
        "The docs hub should not repeat the full official documentation. Its job is to route website visitors to the right next resource: download, install, evaluate features, view updates, or jump into official docs and GitHub.",
      primary: ["Open official docs", "https://hermes-agent.nousresearch.com/docs/", true],
      secondary: ["Go to download page", "./download.html"],
      link: ["View release history", "./releases.html"],
      aside: {
        label: "From here you can reach",
        items: [
          "Hermes Agent official docs",
          "Windows download and release history",
          "Updates and roadmap",
          "GitHub repository and Releases",
        ],
      },
    },
    sections: {
      entry: {
        kicker: "Entry layers",
        title: "A website docs hub usually works best as four routes",
        intro: "Let people choose by task first, then jump into the right resource.",
        cards: [
          {
            eyebrow: "Install",
            title: "Download and install",
            body: "Start with the download page and release history, then decide whether you need the latest Windows installer or an older build.",
            label: "Go to download page",
            href: "./download.html",
          },
          {
            eyebrow: "Learn",
            title: "Features and integrations",
            body: "Use the feature and integrations pages to understand what this desktop control layer actually covers.",
            label: "View features",
            href: "./features.html",
          },
          {
            eyebrow: "Official",
            title: "Official documentation",
            body: "When you need deeper setup and runtime guidance, jump straight into the Hermes Agent docs.",
            label: "Open official docs",
            href: "https://hermes-agent.nousresearch.com/docs/",
            external: true,
          },
          {
            eyebrow: "Source",
            title: "GitHub repository and Releases",
            body: "For developers and advanced users, jump quickly into source, issues, releases, and lower-level project context.",
            label: "View GitHub",
            href: "https://github.com/fathah/hermes-desktop",
            external: true,
          },
        ],
      },
      guides: {
        kicker: "Suggested routes",
        title: "If you are not sure where to start, follow the task instead",
        intro: "This reduces wandering inside the site.",
        cards: [
          ["I want to download", "Start with the download page, then use release history if you need a specific build."],
          ["I want to know what changed", "Start with updates, then move into release history or download."],
          ["I want to know whether this fits me", "Start with features and integrations, then read the FAQ."],
        ],
      },
    },
    cta: {
      kicker: "Continue from here",
      title: "Download, updates, and roadmap are now connected",
      body: "If you are ready to install, go to download. If you are still evaluating, continue through features, integrations, updates, and FAQ.",
      primary: ["Go to download page", "./download.html"],
      secondary: ["View updates", "./updates.html"],
    },
  },
});

normalizeRepoLinks(site);

const RELEASES_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=12`;
const RELEASES_CACHE_KEY = "hermeswindos-release-cache-v1";
const RELEASES_CACHE_TTL = 1000 * 60 * 30;

const releaseState = {
  promise: null,
  snapshot: null,
};

function anchor(label, href, external, passive) {
  const attrs = external ? ' target="_blank" rel="noreferrer"' : "";
  const className = passive ? "footer-muted-link" : "";
  return `<a class="${className}" href="${href}"${attrs}>${label}</a>`;
}

function getReleaseLangCopy(langKey) {
  return releaseCopy[langKey] || releaseCopy.zh;
}

function isReleaseButton(button) {
  return Boolean(
    button &&
      typeof button[1] === "string" &&
      button[1].includes(REPO_RELEASES_MATCH),
  );
}

function renderDownloadMeter(langKey, compact = false) {
  const copy = getReleaseLangCopy(langKey);
  return `
    <div class="download-meter${compact ? " download-meter-compact" : ""}" data-download-meter>
      <div class="download-meter-main">
        <div class="download-meter-total">
          <span>${copy.totalDownloads}</span>
          <strong data-download-total>${copy.loading}</strong>
        </div>
        <div class="download-meter-badges">
          <div class="download-badge">
            <span>${copy.latestVersion}</span>
            <strong data-latest-version>${copy.unknown}</strong>
          </div>
          <div class="download-badge">
            <span>${copy.latestReleaseDownloads}</span>
            <strong data-latest-downloads>${copy.loading}</strong>
          </div>
        </div>
      </div>
      <p class="download-meter-note" data-download-note>${copy.downloadSource}</p>
    </div>
  `;
}

function renderActionCluster(langKey, primary, secondary, link, showDownloadStats, compact = false) {
  const shouldShowStats =
    showDownloadStats || isReleaseButton(primary) || isReleaseButton(secondary) || isReleaseButton(link);
  return `
    <div class="action-cluster${compact ? " action-cluster-compact" : ""}">
      <div class="${compact ? "cta-actions" : "hero-actions"}">
        ${renderButtons(primary, secondary, link)}
      </div>
      ${shouldShowStats ? renderDownloadMeter(langKey, compact) : ""}
    </div>
  `;
}

function formatCount(value, langKey) {
  return new Intl.NumberFormat(langKey === "en" ? "en-US" : "zh-CN").format(
    Number.isFinite(value) ? value : 0,
  );
}

function formatReleaseDate(value, langKey) {
  if (!value) return "";
  const formatter = new Intl.DateTimeFormat(langKey === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formatter.format(new Date(value));
}

function stripMarkdown(markdown) {
  return (markdown || "")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/`{1,3}([^`]*)`{1,3}/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/>\s?/g, "")
    .replace(/\r/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function shortText(text, limit = 220) {
  if (text.length <= limit) return text;
  return `${text.slice(0, limit).trimEnd()}...`;
}

function isWindowsAssetName(name) {
  return /windows|win(?:32|64)?|setup|installer|\.exe$|\.msi$|portable|desktop/i.test(name || "");
}

function isSourceAssetName(name) {
  return /source code|sha256|checksum|blockmap|latest\.yml|builder-effective-config/i.test(
    name || "",
  );
}

function scoreAsset(asset) {
  const name = asset?.name || "";
  const downloads = Number(asset?.download_count ?? asset?.downloads) || 0;
  let score = 0;

  if (isWindowsAssetName(name)) score += 120;
  if (/windows/i.test(name)) score += 60;
  if (/setup|installer/i.test(name)) score += 40;
  if (/\.exe$/i.test(name)) score += 50;
  if (/\.msi$/i.test(name)) score += 45;
  if (/x64|amd64/i.test(name)) score += 16;
  if (/portable/i.test(name)) score += 8;
  if (/zip|7z/i.test(name)) score += 4;
  if (isSourceAssetName(name)) score -= 120;

  return score + downloads / 1000;
}

function compareVersions(a, b) {
  const clean = (value) =>
    String(value || "")
      .replace(/^[^\d]*/g, "")
      .split(/[.-]/)
      .map((part) => Number.parseInt(part.replace(/\D/g, ""), 10) || 0);
  const left = clean(a);
  const right = clean(b);
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    const delta = (left[index] || 0) - (right[index] || 0);
    if (delta !== 0) return delta;
  }
  return 0;
}

function chooseAsset(assets) {
  if (!Array.isArray(assets) || !assets.length) return null;
  return [...assets].sort((left, right) => scoreAsset(right) - scoreAsset(left))[0];
}

function sortReleaseAssets(assets) {
  return [...assets].sort((left, right) => scoreAsset(right) - scoreAsset(left));
}

function readReleaseCache() {
  try {
    const raw = window.localStorage.getItem(RELEASES_CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeReleaseCache(snapshot) {
  try {
    window.localStorage.setItem(
      RELEASES_CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        snapshot,
      }),
    );
  } catch {
    // Ignore cache write failures.
  }
}

function parseReleaseSnapshot(releases) {
  const clean = Array.isArray(releases)
    ? releases.filter((release) => !release.draft)
    : [];

  const entries = clean
    .map((release) => {
      const releaseAssets = Array.isArray(release.assets) ? release.assets : [];
      const assets = sortReleaseAssets(releaseAssets).map((asset) => ({
        name: asset.name,
        url: asset.browser_download_url,
        downloads: Number(asset.download_count) || 0,
        isWindows: isWindowsAssetName(asset.name),
        score: scoreAsset(asset),
      }));
      const windowsAssets = assets.filter((asset) => asset.isWindows);
      const totalDownloads = assets.reduce(
        (sum, asset) => sum + (Number(asset.downloads) || 0),
        0,
      );
      const leadAsset = chooseAsset(assets);
      const latestWindowsAsset = windowsAssets[0] || null;
      return {
        tag: release.tag_name || release.name || "untagged",
        name: release.name || release.tag_name || "Untitled release",
        body: shortText(stripMarkdown(release.body || "")),
        htmlUrl: release.html_url,
        publishedAt: release.published_at,
        assetsCount: assets.length,
        windowsAssetsCount: windowsAssets.length,
        totalDownloads,
        leadAssetUrl: leadAsset?.url || release.html_url,
        leadAssetName: leadAsset?.name || null,
        latestWindowsAsset,
        assets,
      };
    })
    .sort((left, right) => {
      const versionDelta = compareVersions(right.tag, left.tag);
      if (versionDelta !== 0) return versionDelta;
      return new Date(right.publishedAt || 0) - new Date(left.publishedAt || 0);
    });

  const latest = entries[0] || null;
  const previous = entries[1] || null;
  const totalDownloads = entries.reduce((sum, entry) => sum + entry.totalDownloads, 0);
  const compare = latest && previous
    ? {
        latestTag: latest.tag,
        previousTag: previous.tag,
        publishGapDays: Math.max(
          0,
          Math.round(
            Math.abs(new Date(latest.publishedAt || 0) - new Date(previous.publishedAt || 0)) /
              (1000 * 60 * 60 * 24),
          ),
        ),
        downloadDelta: latest.totalDownloads - previous.totalDownloads,
        assetDelta: latest.assetsCount - previous.assetsCount,
        windowsAsset: latest.latestWindowsAsset || latest.assets[0] || null,
      }
    : null;

  return {
    totalDownloads,
    releasesCount: entries.length,
    latestVersion: latest?.tag || null,
    latestReleaseDownloads: latest?.totalDownloads || 0,
    latestPublishedAt: latest?.publishedAt || null,
    latestWindowsAssets: latest?.windowsAssetsCount || 0,
    latestWindowsAsset: latest?.latestWindowsAsset || latest?.assets?.[0] || null,
    previousVersion: previous?.tag || null,
    compare,
    entries,
    source: "live",
  };
}

async function loadReleaseSnapshot() {
  if (releaseState.snapshot) return releaseState.snapshot;
  if (releaseState.promise) return releaseState.promise;

  const cached = readReleaseCache();
  const isFresh =
    cached && typeof cached.timestamp === "number" && Date.now() - cached.timestamp < RELEASES_CACHE_TTL;

  if (isFresh && cached.snapshot) {
    releaseState.snapshot = {
      ...cached.snapshot,
      source: "cache",
    };
    return releaseState.snapshot;
  }

  releaseState.promise = fetch(RELEASES_API_URL, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`GitHub release request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((releases) => {
      const snapshot = parseReleaseSnapshot(releases);
      writeReleaseCache(snapshot);
      releaseState.snapshot = snapshot;
      releaseState.promise = null;
      return snapshot;
    })
    .catch(() => {
      releaseState.promise = null;
      if (cached?.snapshot) {
        releaseState.snapshot = {
          ...cached.snapshot,
          source: "cache",
        };
        return releaseState.snapshot;
      }
      return null;
    });

  return releaseState.promise;
}

function renderLinkGrid(cards) {
  return `
    <div class="doc-grid">
      ${cards
        .map(
          (card) => `
            <article class="doc-card">
              <span class="doc-eyebrow">${card.eyebrow}</span>
              <h3>${card.title}</h3>
              <p>${card.body}</p>
              <div class="doc-actions">
                <a class="button button-secondary button-inline" href="${card.href}"${
                  card.external ? ' target="_blank" rel="noreferrer"' : ""
                }>${card.label}</a>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderReleaseSummaryShell() {
  return `<div class="release-summary-grid" data-release-summary></div>`;
}

function renderReleaseCompareShell() {
  return `<div class="release-compare-grid" data-release-compare></div>`;
}

function renderRecentVersionsShell(limit = 3) {
  return `<div class="recent-version-grid" data-release-recent="${limit}"></div>`;
}

function renderReleaseListShell(kind) {
  return `<div class="release-list" data-release-list="${kind}"></div>`;
}

function renderNav(langCopy, currentPage) {
  return site.nav
    .map((item) => {
      const label = langCopy.navLabels[item.key];
      const active = item.key === currentPage ? "active" : "";
      const attrs = item.external ? ' target="_blank" rel="noreferrer"' : "";
      return `<a class="nav-link ${active}" href="${item.href}"${attrs}>${label}</a>`;
    })
    .join("");
}

function renderFooter(langCopy) {
  const columns = langCopy.footer.columns
    .map((column) => {
      const links = column.links
        .map(([label, href, external, passive]) =>
          `<li>${anchor(label, href, external, passive)}</li>`,
        )
        .join("");
      return `
        <div class="footer-column">
          <h3>${column.title}</h3>
          <ul>${links}</ul>
        </div>
      `;
    })
    .join("");

  return `
    <div class="footer-grid">
      <div class="footer-brand">
        <strong>Hermes Windos</strong>
        <p>${langCopy.footer.blurb}</p>
      </div>
      ${columns}
    </div>
    <div class="footer-bottom">
      <span>${langCopy.footer.copyright}</span>
      <span>www.hermeswindos.com</span>
    </div>
  `;
}

function renderButtons(primary, secondary, link) {
  const parts = [];
  if (primary) {
    parts.push(
      `<a class="button button-primary" href="${primary[1]}"${
        primary[2] ? ' target="_blank" rel="noreferrer"' : ""
      }>${primary[0]}</a>`,
    );
  }
  if (secondary) {
    parts.push(
      `<a class="button button-secondary" href="${secondary[1]}"${
        secondary[2] ? ' target="_blank" rel="noreferrer"' : ""
      }>${secondary[0]}</a>`,
    );
  }
  if (link) {
    parts.push(
      `<a class="text-link" href="${link[1]}"${
        link[2] ? ' target="_blank" rel="noreferrer"' : ""
      }>${link[0]}</a>`,
    );
  }
  return parts.join("");
}

function renderStats(stats) {
  return `
    <div class="stat-grid">
      ${stats
        .map(
          ([value, text]) => `
            <article class="stat-card">
              <strong>${value}</strong>
              <span>${text}</span>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAsidePanel(aside) {
  if (!aside) return "";
  return `
    <div class="page-hero-panel">
      <div class="panel-title">${aside.label}</div>
      <div class="panel-list">
        ${aside.items
          .map(
            (item, index) => `
              <div class="panel-row">
                <span class="panel-index">${String(index + 1).padStart(2, "0")}</span>
                <span>${item}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderPageHero(langKey, hero) {
  return `
    <section class="page-hero section">
      <div class="page-hero-copy">
        <div class="eyebrow">${hero.badge}</div>
        <h1>${hero.title}</h1>
        <p class="page-hero-subtitle">${hero.subtitle}</p>
        <p class="page-hero-body">${hero.body}</p>
        ${renderActionCluster(
          langKey,
          hero.primary,
          hero.secondary,
          hero.link,
          hero.showDownloadStats,
        )}
      </div>
      ${renderAsidePanel(hero.aside)}
    </section>
  `;
}

function renderSectionHeading(kicker, title, intro) {
  return `
    <div class="section-heading">
      <span class="section-kicker">${kicker}</span>
      <h2>${title}</h2>
      ${intro ? `<p>${intro}</p>` : ""}
    </div>
  `;
}

function renderCardGrid(cards, className = "card-grid card-grid-3") {
  return `
    <div class="${className}">
      ${cards
        .map(
          ([title, body]) => `
            <article class="content-card">
              <h3>${title}</h3>
              <p>${body}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderFeatureGrid(cards) {
  return `
    <div class="feature-grid">
      ${cards
        .map(
          ([chip, title, body]) => `
            <article class="feature-card">
              <span class="chip">${chip}</span>
              <h3>${title}</h3>
              <p>${body}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderShotGrid(langCopy) {
  return `
    <div class="shot-grid">
      ${screenshots
        .map(({ image, key }) => {
          const [title, body] = langCopy.screenshotCaptions[key];
          return `
            <article class="shot-card">
              <img src="${image}" alt="${title}" loading="lazy" />
              <div class="shot-copy">
                <strong>${title}</strong>
                <span>${body}</span>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderIntegrationCards(cards) {
  return `
    <div class="integration-grid">
      ${cards
        .map(
          ([title, body, items]) => `
            <article class="integration-card">
              <h3>${title}</h3>
              <p>${body}</p>
              <div class="integration-items">
                ${items
                  .map((item) => `<span class="integration-pill">${item}</span>`)
                  .join("")}
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderFaqItems(items) {
  return `
    <div class="faq-list">
      ${items
        .map(
          ([title, body]) => `
            <article class="faq-item">
              <h3>${title}</h3>
              <p>${body}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderProofStrip(items) {
  return `
    <section class="proof-strip section-tight">
      ${items
        .map(
          ([value, text]) => `
            <article class="proof-item">
              <strong>${value}</strong>
              <span>${text}</span>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}

function renderCta(langKey, cta) {
  return `
    <section class="final-cta section">
      <div class="cta-panel">
        <div>
          <span class="section-kicker">${cta.kicker}</span>
          <h2>${cta.title}</h2>
          <p>${cta.body}</p>
        </div>
        ${renderActionCluster(
          langKey,
          cta.primary,
          cta.secondary,
          cta.link,
          cta.showDownloadStats,
          true,
        )}
      </div>
    </section>
  `;
}

function renderTagWall(title, intro, pills) {
  return `
    <div class="tag-wall-block">
      <h3>${title}</h3>
      <p>${intro}</p>
      <div class="integration-items">
        ${pills.map((pill) => `<span class="integration-pill">${pill}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderStepList(steps) {
  return `
    <div class="step-list">
      ${steps
        .map(
          ([index, text]) => `
            <article class="step-card">
              <span class="step-index">${index}</span>
              <p>${text}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderNoteList(items) {
  return `
    <div class="note-list">
      ${items
        .map(
          (item) => `
            <article class="note-card">
              <p>${item}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderHomePage(langKey, langCopy, pageCopy) {
  const { sections } = pageCopy;
  return `
    <section class="hero section">
      <div class="hero-copy">
        <div class="eyebrow">${pageCopy.hero.badge}</div>
        <h1>${pageCopy.hero.title}</h1>
        <p class="hero-subtitle">${pageCopy.hero.subtitle}</p>
        <p class="hero-body">${pageCopy.hero.body}</p>
        ${renderActionCluster(
          langKey,
          pageCopy.hero.primary,
          pageCopy.hero.secondary,
          pageCopy.hero.link,
          pageCopy.hero.showDownloadStats,
        )}
        <p class="hero-support">${pageCopy.hero.support}</p>
        ${renderStats(pageCopy.hero.stats)}
      </div>
      ${renderAsidePanel(pageCopy.hero.aside)}
    </section>
    ${renderProofStrip(pageCopy.proof)}
    <section class="section" id="why">
      ${renderSectionHeading(
        sections.why.kicker,
        sections.why.title,
        sections.why.intro,
      )}
      ${renderCardGrid(sections.why.cards)}
    </section>
    <section class="section" id="workflows">
      ${renderSectionHeading(
        sections.workflows.kicker,
        sections.workflows.title,
        sections.workflows.intro,
      )}
      ${renderCardGrid(sections.workflows.cards)}
    </section>
    <section class="section section-alt" id="features">
      ${renderSectionHeading(
        sections.features.kicker,
        sections.features.title,
      )}
      ${renderFeatureGrid(sections.features.cards)}
    </section>
    <section class="section" id="screenshots">
      ${renderSectionHeading(
        sections.screenshots.kicker,
        sections.screenshots.title,
        sections.screenshots.intro,
      )}
      ${renderShotGrid(langCopy)}
    </section>
    <section class="section" id="modes">
      ${renderSectionHeading(
        sections.modes.kicker,
        sections.modes.title,
      )}
      ${renderCardGrid(sections.modes.cards)}
    </section>
    <section class="section section-alt" id="integrations">
      ${renderSectionHeading(
        sections.integrations.kicker,
        sections.integrations.title,
      )}
      ${renderIntegrationCards(sections.integrations.cards)}
    </section>
    <section class="section" id="faq">
      ${renderSectionHeading(
        sections.faq.kicker,
        sections.faq.title,
      )}
      ${renderFaqItems(sections.faq.items)}
    </section>
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderFeaturesPage(langKey, _langCopy, pageCopy) {
  return `
    ${renderPageHero(langKey, pageCopy.hero)}
    ${pageCopy.groups
      .map(
        (group) => `
          <section class="section">
            ${renderSectionHeading(group.kicker, group.title, group.intro)}
            ${renderCardGrid(group.cards)}
          </section>
        `,
      )
      .join("")}
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderIntegrationsPage(langKey, _langCopy, pageCopy) {
  const sections = pageCopy.sections;
  return `
    ${renderPageHero(langKey, pageCopy.hero)}
    <section class="section">
      ${renderSectionHeading(
        sections.providers.kicker,
        sections.providers.title,
        sections.providers.intro,
      )}
      ${renderCardGrid(sections.providers.cards)}
      ${renderTagWall("", "", sections.providers.pills)}
    </section>
    <section class="section section-alt">
      ${renderSectionHeading(
        sections.gateways.kicker,
        sections.gateways.title,
        sections.gateways.intro,
      )}
      ${renderCardGrid(sections.gateways.cards)}
      ${renderTagWall("", "", sections.gateways.pills)}
    </section>
    <section class="section">
      ${renderSectionHeading(
        sections.runtime.kicker,
        sections.runtime.title,
        sections.runtime.intro,
      )}
      ${renderCardGrid(sections.runtime.cards)}
    </section>
    <section class="section section-alt">
      ${renderSectionHeading(
        sections.operator.kicker,
        sections.operator.title,
        sections.operator.intro,
      )}
      ${renderCardGrid(sections.operator.cards)}
    </section>
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderDownloadPage(langKey, _langCopy, pageCopy) {
  const sections = pageCopy.sections;
  return `
    ${renderPageHero(langKey, pageCopy.hero)}
    ${
      sections.live
        ? `
          <section class="section">
            ${renderSectionHeading(
              sections.live.kicker,
              sections.live.title,
              sections.live.intro,
            )}
            ${renderReleaseSummaryShell()}
            ${renderReleaseCompareShell()}
            <div class="recent-section-head">
              <span class="section-kicker">${getReleaseLangCopy(langKey).recentVersions}</span>
            </div>
            ${renderRecentVersionsShell(3)}
          </section>
        `
        : ""
    }
    <section class="section">
      ${renderCardGrid(sections.cards)}
    </section>
    <section class="section section-alt">
      ${renderSectionHeading(
        sections.steps.kicker,
        sections.steps.title,
      )}
      ${renderStepList(sections.steps.items)}
    </section>
    <section class="section">
      ${renderSectionHeading(
        sections.notes.kicker,
        sections.notes.title,
      )}
      ${renderNoteList(sections.notes.items)}
    </section>
    <section class="section section-alt">
      ${renderSectionHeading(
        sections.fits.kicker,
        sections.fits.title,
      )}
      ${renderCardGrid(sections.fits.cards)}
    </section>
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderFaqPage(langKey, _langCopy, pageCopy) {
  return `
    ${renderPageHero(langKey, pageCopy.hero)}
    <section class="section">
      ${renderFaqItems(pageCopy.items)}
    </section>
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderReleasesPage(langKey, _langCopy, pageCopy) {
  const sections = pageCopy.sections;
  return `
    ${renderPageHero(langKey, pageCopy.hero)}
    <section class="section">
      ${renderSectionHeading(
        sections.summary.kicker,
        sections.summary.title,
        sections.summary.intro,
      )}
      ${renderReleaseSummaryShell()}
      ${renderReleaseCompareShell()}
    </section>
    <section class="section section-alt">
      ${renderSectionHeading(
        sections.history.kicker,
        sections.history.title,
        sections.history.intro,
      )}
      ${renderRecentVersionsShell(4)}
      ${renderReleaseListShell("releases")}
    </section>
    <section class="section">
      ${renderSectionHeading(
        sections.channels.kicker,
        sections.channels.title,
        sections.channels.intro,
      )}
      ${renderCardGrid(sections.channels.cards)}
    </section>
    <section class="section section-alt">
      ${renderSectionHeading(
        sections.notes.kicker,
        sections.notes.title,
      )}
      ${renderNoteList(sections.notes.items)}
    </section>
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderUpdatesPage(langKey, _langCopy, pageCopy) {
  const sections = pageCopy.sections;
  return `
    ${renderPageHero(langKey, pageCopy.hero)}
    <section class="section">
      ${renderSectionHeading(
        sections.feed.kicker,
        sections.feed.title,
        sections.feed.intro,
      )}
      ${renderRecentVersionsShell(3)}
      ${renderReleaseListShell("updates")}
    </section>
    <section class="section section-alt">
      ${renderSectionHeading(
        sections.themes.kicker,
        sections.themes.title,
        sections.themes.intro,
      )}
      ${renderCardGrid(sections.themes.cards)}
    </section>
    <section class="section">
      ${renderSectionHeading(
        sections.notes.kicker,
        sections.notes.title,
      )}
      ${renderNoteList(sections.notes.items)}
    </section>
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderRoadmapPage(langKey, _langCopy, pageCopy) {
  return `
    ${renderPageHero(langKey, pageCopy.hero)}
    ${pageCopy.groups
      .map(
        (group, index) => `
          <section class="section${index % 2 === 1 ? " section-alt" : ""}">
            ${renderSectionHeading(group.kicker, group.title, group.intro)}
            ${renderCardGrid(group.cards)}
          </section>
        `,
      )
      .join("")}
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderDocsPage(langKey, _langCopy, pageCopy) {
  const sections = pageCopy.sections;
  return `
    ${renderPageHero(langKey, pageCopy.hero)}
    <section class="section">
      ${renderSectionHeading(
        sections.entry.kicker,
        sections.entry.title,
        sections.entry.intro,
      )}
      ${renderLinkGrid(sections.entry.cards)}
    </section>
    <section class="section section-alt">
      ${renderSectionHeading(
        sections.guides.kicker,
        sections.guides.title,
        sections.guides.intro,
      )}
      ${renderCardGrid(sections.guides.cards)}
    </section>
    ${renderCta(langKey, pageCopy.cta)}
  `;
}

function renderReleaseSummaryCards(langKey, snapshot, pending = false) {
  const copy = getReleaseLangCopy(langKey);
  if (pending) {
    return `
      <article class="release-summary-card">
        <span>${copy.totalDownloads}</span>
        <strong>${copy.loading}</strong>
      </article>
      <article class="release-summary-card">
        <span>${copy.latestVersion}</span>
        <strong>${copy.unknown}</strong>
      </article>
      <article class="release-summary-card">
        <span>${copy.trackedReleases}</span>
        <strong>${copy.loading}</strong>
      </article>
      <article class="release-summary-card">
        <span>${copy.windowsAssets}</span>
        <strong>${copy.loading}</strong>
      </article>
    `;
  }

  if (!snapshot) {
    return `
      <article class="release-summary-card">
        <span>${copy.totalDownloads}</span>
        <strong>${copy.unknown}</strong>
      </article>
      <article class="release-summary-card">
        <span>${copy.latestVersion}</span>
        <strong>${copy.unknown}</strong>
      </article>
      <article class="release-summary-card">
        <span>${copy.trackedReleases}</span>
        <strong>${copy.unknown}</strong>
      </article>
      <article class="release-summary-card">
        <span>${copy.windowsAssets}</span>
        <strong>${copy.unknown}</strong>
      </article>
    `;
  }

  return `
    <article class="release-summary-card">
      <span>${copy.totalDownloads}</span>
      <strong>${formatCount(snapshot.totalDownloads, langKey)}</strong>
    </article>
    <article class="release-summary-card">
      <span>${copy.latestVersion}</span>
      <strong>${snapshot.latestVersion || copy.unknown}</strong>
    </article>
    <article class="release-summary-card">
      <span>${copy.trackedReleases}</span>
      <strong>${formatCount(snapshot.releasesCount, langKey)}</strong>
    </article>
    <article class="release-summary-card">
      <span>${copy.windowsAssets}</span>
      <strong>${formatCount(snapshot.latestWindowsAssets, langKey)}</strong>
    </article>
  `;
}

function formatSignedCount(value, langKey, fallback) {
  if (!Number.isFinite(value)) return fallback;
  if (value === 0) return fallback;
  const sign = value > 0 ? "+" : "-";
  return `${sign}${formatCount(Math.abs(value), langKey)}`;
}

function renderReleaseCompareCards(langKey, snapshot, pending = false) {
  const copy = getReleaseLangCopy(langKey);
  if (pending) {
    return `
      <article class="compare-card">
        <span class="compare-label">${copy.latestVsPrevious}</span>
        <strong>${copy.loading}</strong>
      </article>
      <article class="compare-card">
        <span class="compare-label">${copy.recommendedWindowsAsset}</span>
        <strong>${copy.loading}</strong>
      </article>
    `;
  }

  if (!snapshot?.compare) {
    return `<div class="release-empty">${copy.compareEmpty}</div>`;
  }

  const compare = snapshot.compare;
  const installer = compare.windowsAsset;
  return `
    <article class="compare-card">
      <span class="compare-label">${copy.latestVsPrevious}</span>
      <h3>${compare.latestTag} vs ${compare.previousTag}</h3>
      <div class="compare-metrics">
        <span>${copy.publishGap}: ${formatCount(compare.publishGapDays, langKey)} ${copy.daysUnit}</span>
        <span>${copy.downloadDelta}: ${formatSignedCount(compare.downloadDelta, langKey, copy.sameAsPrevious)}</span>
        <span>${copy.assetDelta}: ${formatSignedCount(compare.assetDelta, langKey, copy.sameAsPrevious)}</span>
      </div>
    </article>
    <article class="compare-card">
      <span class="compare-label">${copy.recommendedWindowsAsset}</span>
      <h3>${installer?.name || copy.noWindowsAsset}</h3>
      <div class="compare-metrics">
        <span>${copy.assetDownloads}: ${installer ? formatCount(installer.downloads, langKey) : copy.unknown}</span>
        <span>${copy.latestVersion}: ${snapshot.latestVersion || copy.unknown}</span>
      </div>
      ${
        installer?.url
          ? `<div class="compare-actions"><a class="button button-primary button-inline" href="${installer.url}" target="_blank" rel="noreferrer">${copy.downloadWindowsAsset}</a></div>`
          : ""
      }
    </article>
  `;
}

function renderRecentVersionCards(langKey, snapshot, limit = 3, pending = false) {
  const copy = getReleaseLangCopy(langKey);
  if (pending) {
    return Array.from({ length: limit }, () => `
      <article class="release-card recent-version-card">
        <div class="release-card-head">
          <span class="release-tag">${copy.loading}</span>
          <time>${copy.loading}</time>
        </div>
        <h3>${copy.loading}</h3>
        <p>${copy.recentVersionIntro}</p>
      </article>
    `).join("");
  }

  if (!snapshot?.entries?.length) {
    return `<div class="release-empty">${copy.releaseHistoryEmpty}</div>`;
  }

  return snapshot.entries.slice(0, limit).map((entry) => {
    const installer = entry.latestWindowsAsset || entry.assets?.[0] || null;
    return `
      <article class="release-card recent-version-card">
        <div class="release-card-head">
          <span class="release-tag">${entry.tag}</span>
          <time>${formatReleaseDate(entry.publishedAt, langKey)}</time>
        </div>
        <h3>${entry.name}</h3>
        <p>${entry.body || copy.recentVersionIntro}</p>
        <div class="release-stats">
          <span>${copy.assetName}: ${installer?.name || copy.noWindowsAsset}</span>
          <span>${copy.assetDownloads}: ${installer ? formatCount(installer.downloads, langKey) : copy.unknown}</span>
        </div>
        <div class="release-links">
          <a class="button button-secondary button-inline" href="${entry.htmlUrl}" target="_blank" rel="noreferrer">${copy.viewRelease}</a>
          <a class="button button-primary button-inline" href="${installer?.url || entry.leadAssetUrl}" target="_blank" rel="noreferrer">${copy.downloadWindowsAsset}</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderReleaseHistoryCards(langKey, snapshot, kind) {
  const copy = getReleaseLangCopy(langKey);
  if (!snapshot?.entries?.length) {
    return `<div class="release-empty">${kind === "updates" ? copy.changelogEmpty : copy.releaseHistoryEmpty}</div>`;
  }

  const items = kind === "updates" ? snapshot.entries.slice(0, 6) : snapshot.entries.slice(0, 8);
  return items
    .map(
      (entry) => `
        <article class="release-card">
          <div class="release-card-head">
            <span class="release-tag">${entry.tag}</span>
            <time>${formatReleaseDate(entry.publishedAt, langKey)}</time>
          </div>
          <h3>${entry.name}</h3>
          <p>${entry.body || entry.name}</p>
          <div class="release-stats">
            <span>${copy.releaseAssets}: ${formatCount(entry.assetsCount, langKey)}</span>
            <span>${copy.releaseDownloads}: ${formatCount(entry.totalDownloads, langKey)}</span>
            <span>${copy.assetName}: ${entry.latestWindowsAsset?.name || copy.noWindowsAsset}</span>
          </div>
          <div class="release-links">
            <a class="button button-secondary button-inline" href="${entry.htmlUrl}" target="_blank" rel="noreferrer">${copy.viewRelease}</a>
            <a class="button button-primary button-inline" href="${entry.latestWindowsAsset?.url || entry.leadAssetUrl}" target="_blank" rel="noreferrer">${copy.downloadWindowsAsset}</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function updateDownloadMeters(langKey, snapshot, pending = false) {
  const copy = getReleaseLangCopy(langKey);
  document.querySelectorAll("[data-download-meter]").forEach((meter) => {
    const total = meter.querySelector("[data-download-total]");
    const version = meter.querySelector("[data-latest-version]");
    const latest = meter.querySelector("[data-latest-downloads]");
    const note = meter.querySelector("[data-download-note]");

    if (pending) {
      if (total) total.textContent = copy.loading;
      if (version) version.textContent = copy.unknown;
      if (latest) latest.textContent = copy.loading;
      if (note) note.textContent = copy.downloadSource;
      return;
    }

    if (!snapshot) {
      if (total) total.textContent = copy.unknown;
      if (version) version.textContent = copy.unknown;
      if (latest) latest.textContent = copy.unknown;
      if (note) note.textContent = copy.unavailableSource;
      return;
    }

    if (total) total.textContent = formatCount(snapshot.totalDownloads, langKey);
    if (version) version.textContent = snapshot.latestVersion || copy.unknown;
    if (latest) latest.textContent = formatCount(snapshot.latestReleaseDownloads, langKey);
    if (note) {
      note.textContent =
        snapshot.source === "cache" ? copy.cachedSource : copy.downloadSource;
    }
  });
}

function updateLatestDownloadLinks(snapshot) {
  const latestInstaller = snapshot?.latestWindowsAsset;
  if (!latestInstaller?.url) return;

  document
    .querySelectorAll("a")
    .forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (!href.startsWith(REPO_RELEASES_MATCH)) return;
      if (link.closest(".release-links")) return;
      link.href = latestInstaller.url;
    });
}

async function hydrateReleaseData(langKey) {
  const hasLiveTargets = document.querySelector(
    "[data-download-meter], [data-release-summary], [data-release-compare], [data-release-recent], [data-release-list]",
  );
  if (!hasLiveTargets) return;

  updateDownloadMeters(langKey, null, true);
  document.querySelectorAll("[data-release-summary]").forEach((node) => {
    node.innerHTML = renderReleaseSummaryCards(langKey, null, true);
  });
  document.querySelectorAll("[data-release-compare]").forEach((node) => {
    node.innerHTML = renderReleaseCompareCards(langKey, null, true);
  });
  document.querySelectorAll("[data-release-recent]").forEach((node) => {
    node.innerHTML = renderRecentVersionCards(
      langKey,
      null,
      Number(node.dataset.releaseRecent) || 3,
      true,
    );
  });
  const snapshot = await loadReleaseSnapshot();
  updateDownloadMeters(langKey, snapshot);
  updateLatestDownloadLinks(snapshot);

  document.querySelectorAll("[data-release-summary]").forEach((node) => {
    node.innerHTML = renderReleaseSummaryCards(langKey, snapshot);
  });
  document.querySelectorAll("[data-release-compare]").forEach((node) => {
    node.innerHTML = renderReleaseCompareCards(langKey, snapshot);
  });
  document.querySelectorAll("[data-release-recent]").forEach((node) => {
    node.innerHTML = renderRecentVersionCards(
      langKey,
      snapshot,
      Number(node.dataset.releaseRecent) || 3,
    );
  });

  document.querySelectorAll("[data-release-list]").forEach((node) => {
    node.innerHTML = renderReleaseHistoryCards(langKey, snapshot, node.dataset.releaseList);
  });
}

function renderPage(langKey, pageKey) {
  const langCopy = site[langKey];
  const pageCopy = langCopy.pages[pageKey];
  const canonicalHref =
    pageKey === "home"
      ? "https://www.hermeswindos.com/"
      : `https://www.hermeswindos.com/${pageKey}.html`;
  document.documentElement.lang = langKey === "zh" ? "zh-CN" : "en";
  document.title = pageCopy.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", pageCopy.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", pageCopy.hero.title);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", pageCopy.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", canonicalHref);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", canonicalHref);

  document.getElementById("brand-subtitle").textContent = langCopy.brandSubtitle;
  document.getElementById("nav").innerHTML = renderNav(langCopy, pageKey);
  document.getElementById("header-download").textContent = langCopy.headerDownload;
  document.getElementById("site-footer").innerHTML = renderFooter(langCopy);

  const root = document.getElementById("page-root");
  if (!root) return;

  switch (pageKey) {
    case "features":
      root.innerHTML = renderFeaturesPage(langKey, langCopy, pageCopy);
      break;
    case "integrations":
      root.innerHTML = renderIntegrationsPage(langKey, langCopy, pageCopy);
      break;
    case "download":
      root.innerHTML = renderDownloadPage(langKey, langCopy, pageCopy);
      break;
    case "releases":
      root.innerHTML = renderReleasesPage(langKey, langCopy, pageCopy);
      break;
    case "updates":
      root.innerHTML = renderUpdatesPage(langKey, langCopy, pageCopy);
      break;
    case "roadmap":
      root.innerHTML = renderRoadmapPage(langKey, langCopy, pageCopy);
      break;
    case "docs":
      root.innerHTML = renderDocsPage(langKey, langCopy, pageCopy);
      break;
    case "faq":
      root.innerHTML = renderFaqPage(langKey, langCopy, pageCopy);
      break;
    default:
      root.innerHTML = renderHomePage(langKey, langCopy, pageCopy);
      break;
  }

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langSwitch === langKey);
  });

  hydrateReleaseData(langKey);
}

function currentLang() {
  const stored = window.localStorage.getItem("hermeswindos-lang");
  return stored === "en" ? "en" : "zh";
}

function init() {
  const pageKey = document.body.dataset.page || "home";
  let lang = currentLang();
  renderPage(lang, pageKey);

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      lang = button.dataset.langSwitch === "en" ? "en" : "zh";
      window.localStorage.setItem("hermeswindos-lang", lang);
      renderPage(lang, pageKey);
    });
  });
}

init();

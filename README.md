# wechat-miniprogram-ui (微信小程序 UI & 组件 Skill)

专门用于微信小程序 UI 设计与自定义组件开发的 AI Agent Skill（面向 Antigravity / Claude Code / Cursor 等支持 Agent Skill 标准的开发助手）。

## ✨ 特性 (Features)
- 📱 **原生小程序最佳实践**：严格遵循微信小程序原生标准（WXML / WXSS / TS & JS / JSON 四件套）。
- 📐 **750rpx 响应式设计**：无缝适配各类移动端机型与全面屏安全区。
- ⚡️ **高性能交互设计**：规避频繁 `setData`，复杂动效手势优先采用 WXS 视图层加速。
- 🧩 **模块化与开箱即用**：规范化的组件属性（Properties）、事件通信（Events）与插槽（Slot）。

---

## 📁 目录结构 (Structure)

```text
wechat-miniprogram-ui/
├── SKILL.md                 # 核心技能说明文档（Agent 识别与触发依据）
├── install.sh               # 一键安装/软链接至本地配置的脚本
├── references/              # 专业技术规范与指南
│   ├── component-specs.md   # 自定义组件规范（构造器、生命周期、属性）
│   ├── styling-standards.md # WXSS 与 rpx 布局标准
│   ├── animation-guide.md   # 动效与 WXS 手势交互指南
│   └── performance-checklist.md # setData 性能与按需注入清单
├── examples/                # 常用组件实战范例（持续扩充中）
└── scripts/                 # 辅助开发与代码生成脚本
```

---

## 🚀 安装与使用 (Installation)

### 1. 本地全局安装（推荐）

直接运行安装脚本，创建全局软链接：

```bash
chmod +x install.sh
./install.sh
```

脚本会自动将当前目录软链接至 `~/.gemini/config/skills/wechat-miniprogram-ui`。链接后你在本项目的修改将实时生效，无需重复安装。

### 2. 作为工作区项目技能使用

你也可以将本项目克隆到具体小程序工程的 `.agents/skills/` 目录下：

```bash
git clone https://github.com/your-username/wechat-miniprogram-ui.git .agents/skills/wechat-miniprogram-ui
```

---

## 📄 开源协议 (License)

[MIT License](./LICENSE)

# wechat-miniprogram-ui (微信小程序 UI & 组件 Skill)

专门用于微信小程序 UI 设计、精美动效凭证组件库与页面开发的 AI Agent Skill（支持 Antigravity / Claude Code / Cursor / WeChat DevTools）。

## ✨ 项目特性 (Features)
- 📱 **原生小程序最佳实践**：严格遵循微信小程序原生标准（WXML / WXSS / TS & JS / JSON 四件套与 WXS 高性能响应）。
- 🌊 **物理流体动效**：核心统一采用 `cubic-bezier(0.2, 0.7, 0.2, 1)` 非线性减速曲线与 Stagger 错帧进场机制。
- 📐 **750rpx 现代布局**：移动端响应式基准、全面屏安全区适配与 CSS 变量令牌。
- ⚡️ **60fps 手势跟手**：拖拽手势全部通过 WXS 视图层加速，杜绝跨线程 `setData` 掉帧。
- 🧩 **高度模块化**：开箱即用，已内置 6 款高体验感凭证/卡片组件与演示 Demo 页面，可轻松扩展页面（Pages）级开发。

---

## 🎨 已内置 6 大精美组件 (Components)

| 组件名称 | 目录 | 效果描述 |
| :--- | :--- | :--- |
| **1. 毛玻璃月份浮层** | `src/components/frosted-glass-sheet` | 26px 模糊渐变，半透明面板从 0.94 放大浮起；12 个月格子按比例错开 4 帧（~66ms）自底向上平滑填充。 |
| **2. 圆环计数弹出** | `src/components/ring-count-sheet` | 底部面板 0.5s 升起，背景压暗 40%；落定后圆环 stroke-dashoffset 1.2s 顺滑绘制，中心数字同步平滑递增。 |
| **3. 刻度尺进度弹出** | `src/components/tick-ruler-sheet` | 纸质票据质感滑入，53 根周刻度错开 1 帧逐根变深，扫至“今天”切换强调色；支持原地展开完整凭据编号（保持行高不变）。 |
| **4. 照片抽屉贴合** | `src/components/photo-drawer-sheet` | 沉浸式海报从 1.08 缩小到 1.0 铺满，暗角渐变托大字；抽屉通过 `margin-top: -44rpx` (-22px) 向上紧贴照片底边推入，水平进度条随后展开。 |
| **5. 原地翻面面板** | `src/components/flip-card-sheet` | `perspective: 1200px`，卡片沿 Y 轴 180° 原地翻转，正面常规信息，背面到场核销二维码/条形码，不丢上下文。 |
| **6. 下拉展开面板** | `src/components/drag-expand-sheet` | 底部半高面板，居中阻尼拖拽手柄，配合 **WXS** 实现 60fps 跟手拖拽，支持向下拉动顺滑展开下半部完整规则。 |

---

## 📁 目录结构 (Structure)

```text
wechat-miniprogram-ui/
├── app.json                 # 小程序全局配置（含 demo 页面路由与 lazyCodeLoading）
├── app.ts / app.wxss        # 全局入口与基础样式
├── project.config.json      # 微信开发者工具工程配置（可直接导入预览）
├── install.sh               # 一键软链接至 ~/.gemini/config/skills 的安装脚本
├── SKILL.md                 # 技能核心指令与触发定义（Agent 读取的核心）
├── references/              # 专业技术规范与扩展阅读
│   ├── component-specs.md   # 自定义组件规范（构造器、生命周期、属性）
│   ├── motion-curves.md     # 核心贝塞尔曲线与时序编排参数
│   ├── styling-standards.md # WXSS 与 rpx 布局标准
│   ├── animation-guide.md   # 动效与 WXS 手势交互指南
│   ├── performance-checklist.md # setData 性能与按需注入清单
│   └── page-architecture.md # 为后续页面级开发预留的工程规范
├── src/
│   ├── components/          # 6 大核心凭证组件源码
│   └── pages/
│       └── demo/            # 完整的全组件交互演示页面
└── scripts/
    └── create-component.sh  # 快速脚手架脚本：./scripts/create-component.sh <name>
```

---

## 🚀 预览与使用 (Getting Started)

### 1. 微信开发者工具中预览
直接使用微信开发者工具打开当前项目目录 [`wechat-miniprogram-ui`](file:///Users/kechangchang/wechat-miniprogram-ui)，即可在模拟器中体验全部 6 个组件的流畅动效。

### 2. 作为全局 Skill 运行
项目已自动软链接至 `~/.gemini/config/skills/wechat-miniprogram-ui`。在任何 Antigravity 会话中，对 Agent 发送需求即可自动调用本套规范生产组件或页面。

---

## 📄 开源协议 (License)

[MIT License](./LICENSE)

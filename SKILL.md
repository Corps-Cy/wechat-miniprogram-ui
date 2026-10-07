---
name: wechat-miniprogram-ui
description: >-
  Expert guide and generator for WeChat Mini Program (微信小程序) UI design, custom components, and pages.
  Use this skill whenever creating, designing, refactoring, or optimizing WeChat Mini Program UI components,
  voucher sheets, motion curves, layouts (WXML, WXSS, rpx responsive units), styling systems, interactive WXS animations,
  or page architectures.
---

# WeChat Mini Program UI & Component Design Skill (微信小程序 UI/组件技能)

A specialized skill for building high-quality, performant, and accessible WeChat Mini Program UI components, vouchers, and page architectures.

---

## 1. 核心设计哲学与统一规范 (Design Philosophy & Guidelines)

- **小程序规范优先**：严格遵循微信小程序官方自定义组件规范（WXML、WXSS、JS/TS、JSON 四件套）。
- **统一动效基准**：
  - 核心贝塞尔曲线：`cubic-bezier(0.2, 0.7, 0.2, 1)`（类 iOS 柔和流体减速曲线）。
  - 错帧动效（Stagger）：子元素（网格、刻度）逐帧延迟进场（如 16ms ~ 66ms/帧）。
- **750rpx 响应式与安全区**：
  - 以 750rpx 视觉稿为基准，严格适配全机型；
  - 底部必须适配全面屏安全区 `env(safe-area-inset-bottom)`。
- **渲染性能红线**：
  - 避免频繁与大体积的 `setData`，局部刷新精确到具体路径字段；
  - 复杂手势与高频跟手拖拽一律使用 **WXS** 脚本在视图层直接响应。

---

## 2. 6 大核心凭证与弹层组件索引 (Core Components)

| 组件名称 | 目录路径 | 核心特性与动效 |
| :--- | :--- | :--- |
| **毛玻璃月份浮层** | `miniprogram/components/frosted-glass-sheet` | 26px 背景模糊过渡，底色 `rgba(255,255,255,0.42)`，Scale 0.94->1.0 浮起；12 个月份格子错开 4 帧（~66ms）自底向上填充。 |
| **圆环计数弹出** | `miniprogram/components/ring-count-sheet` | 面板 0.5s 升起，背景压暗 40%；落定后圆环 `stroke-dashoffset` 1.2s 画完，中心数值同步递增。 |
| **刻度尺进度弹出** | `miniprogram/components/tick-ruler-sheet` | 纸质票据质感滑入，53 根周刻度错开 1 帧逐根变深，扫至“今天”切换强调色；点击支持原地展开完整凭据编号（保持行高不变）。 |
| **照片抽屉贴合** | `miniprogram/components/photo-drawer-sheet` | 沉浸式海报从 1.08 缩小到 1.0 铺满，暗角渐变托大字；抽屉通过 `margin-top: -44rpx` (-22px) 向上紧贴照片底边推入，水平进度条随后展开。 |
| **原地翻面面板** | `miniprogram/components/flip-card-sheet` | `perspective: 1200px`，卡片沿 Y 轴 180° 原地翻转，正面为常规信息，背面为到场核销二维码/条形码，不丢失上下文。 |
| **下拉展开面板** | `miniprogram/components/drag-expand-sheet` | 底部半高面板，居中阻尼拖拽手柄，配合 **WXS** 实现 60fps 跟手拖拽，支持向下拉动顺滑展开下半部完整规则。 |

---

## 3. 详细技术规范与扩展阅读 (References)

- **自定义组件规范**：[references/component-specs.md](./references/component-specs.md)
- **动效曲线与时序规范**：[references/motion-curves.md](./references/motion-curves.md)
- **WXSS 样式与布局规范**：[references/styling-standards.md](./references/styling-standards.md)
- **动效与交互优化指南**：[references/animation-guide.md](./references/animation-guide.md)
- **性能优化与红线清单**：[references/performance-checklist.md](./references/performance-checklist.md)
- **页面级开发架构规范**：[references/page-architecture.md](./references/page-architecture.md)

---

## 4. 辅助开发与脚手架工具

- **组件快速生成脚手架**：[scripts/create-component.sh](./scripts/create-component.sh)
- **组件预览体验工程**：[miniprogram/pages/demo/index.wxml](./miniprogram/pages/demo/index.wxml)

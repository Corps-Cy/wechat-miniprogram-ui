---
name: wechat-miniprogram-ui
description: >-
  Expert guide and generator for WeChat Mini Program (微信小程序) UI design, custom components, and pages.
  Use this skill whenever creating, designing, refactoring, or optimizing WeChat Mini Program UI components,
  voucher sheets, motion curves, layouts (WXML, WXSS, rpx responsive units), styling systems, interactive WXS animations,
  tactile feedback, micro-toasts, or page architectures.
---

# WeChat Mini Program UI & Component Design Skill (微信小程序 UI/组件技能)

A specialized skill for building high-quality, performant, and tactile WeChat Mini Program UI components, vouchers, micro-toasts, and page architectures.

---

## 1. 核心设计哲学与统一规范 (Design Philosophy & Guidelines)

- **小程序规范优先**：严格遵循微信小程序官方自定义组件规范（WXML、WXSS、JS、JSON 四件套与 WXS 高性能响应）。
- **统一动效基准**：
  - 核心贝塞尔曲线：`cubic-bezier(0.2, 0.7, 0.2, 1)`（类 iOS 柔和流体减速曲线）。
  - 弹性阻尼回弹：`cubic-bezier(0.175, 0.885, 0.32, 1.25)`。
  - 错帧动效（Stagger）：子元素（网格、刻度、瀑布流、红点联动）逐帧延迟进场（如 16ms ~ 70ms/帧）。
- **触觉物理反馈（Haptics）**：在关键帧（圆环闭合、刻度卡位、手势吸附、按钮超调、撤销操作）注入 `wx.vibrateShort({ type: 'light' | 'medium' })`。
- **全机型自适应与无横向溢出**：
  - 视口严格锁定 `100vw`，杜绝任何容器绝对定宽导致的横向滚动或白边暴露；
  - 底部必须适配全面屏安全区 `env(safe-area-inset-bottom)`。
- **渲染性能红线**：
  - 复杂手势与高频跟手拖拽（3D 倾斜、阻尼抽屉、下拉折痕、卡片滑动）一律使用 **WXS** 脚本在视图层直接响应，杜绝 `setData` 掉帧与抖动。

---

## 2. 全景组件与微动效矩阵 (Component Matrix)

### 分类 01：凭证与卡券流体弹层 (01~06 Popup Panels)
- `miniprogram/components/frosted-glass-sheet`: **01 玻璃面板浮起**（26px 模糊，12 月份胶囊错帧 4f 填充）
- `miniprogram/components/ring-count-sheet`: **02 圆环计数弹出**（40% 压暗，顺时针 1.2s 顺滑画圆，数字同步滚）
- `miniprogram/components/tick-ruler-sheet`: **03 刻度尺扫到今天**（53 周刻度逐根变深，编号原地等宽无抖动展开）
- `miniprogram/components/photo-drawer-sheet`: **04 照片抽屉贴合**（大图 1.08->1 铺满，-22px 咬合推入，进度条涨至 45%）
- `miniprogram/components/flip-card-sheet`: **05 点击翻面凭证**（1200px 景深，原地 180° 翻转，90° 换面出示核销码）
- `miniprogram/components/drag-expand-sheet`: **06 下拉展开面板**（虚线齿孔折痕，2° 微摆动，下拉超 40% 展开入座小票）

### 分类 02：质感微交互与核心组件 (07~14 Tactile Motions)
- `miniprogram/components/tilt-glare-card`: **07 3D倾斜光影面板**（跟随触摸坐标 3D 浮动，径向流光反射，松手 Spring 回正）
- `miniprogram/components/fluid-morph-sheet`: **08 流体胶囊形变**（胶囊按钮向弹窗面板水滴般无缝延展形态变换）
- `miniprogram/components/shared-element-card`: **09 共享元素无缝展开**（卡片原地膨胀过渡至全高度详情页，无缝衔接）
- `miniprogram/components/odometer-chart`: **10 磁吸游标与滚动码表**（折线图滑动磁吸节点，数字机械码表式滚动）
- `miniprogram/components/elastic-bottom-sheet`: **11 阻尼弹性抽屉**（橡皮筋阻尼回弹，LOW / MID / FULL 三段速度吸附）
- `miniprogram/components/conic-glow-card`: **12 动态弥散光晕边框**（2px 旋转流光锥形描边 + 呼吸弥散背光）
- `miniprogram/components/stagger-cascade-grid`: **13 物理弹簧交错流**（瀑布流卡片错开 0.1s 弹性交错滑入，支持重播与点击弹性）
- `miniprogram/components/press-scale-button`: **14 弹性微缩触觉反馈**（Scale 0.96 物理压缩与深度内阴影，松手超调 +1.1% 弹跳）

### 分类 03：高级审美页面布局 (15~18 Aesthetic Layouts)
- `miniprogram/components/bento-grid-wall`: **15 便当盒网格墙 (Bento Grid)**（高饱和度色块、微质感渐变、多比例信息自适应）
- `miniprogram/components/stacked-deck-view`: **16 层叠卡片牌组 (Stacked Deck)**（景深视差透视，向上滑牌飞离与自动换牌）
- `miniprogram/components/layered-exploded-panel`: **17 分层视差抽离面板 (Layered Exploded)**（3D 轴测透视，软硬件分层抽离爆炸展示）
- `miniprogram/components/overlap-stagger-card`: **18 重叠咬合与阶梯错位排版 (Overlap & Stagger)**（负外边距卡片层叠与不对称阶梯，突破模板平铺）

### 分类 04：触觉高级手势与提示动效 (19~24 Advanced Interactions & Micro-Toasts)
- `miniprogram/components/swipe-card-stack`: **19 左右滑动卡片堆叠 (Swipe Stack)**（WXS 物理阻尼旋转跟随，左滑忽视/右滑心动）
- `miniprogram/components/split-button-morph`: **20 裂变流体胶囊 (Split Button)**（一分为二弹性展开，微缩回弹与触觉震动）
- `miniprogram/components/scroll-spy-category`: **21 滚动联动分类 (Scroll Spy)**（左侧粘性侧栏与右侧商品流 60fps 双向丝滑联动）
- `miniprogram/components/undo-timer-bar`: **22 倒计时进度撤销条 (Undo Timer Bar)**（4秒线性倒计时进度，删除可悔、走完才自然隐退）
- `miniprogram/components/dot-rebound-scatter`: **23 红点弧线回缩与三级联动消散 (Dot Rebound)**（沿原位弧线微缩消散，错开4帧联动上级角标递减）
- `miniprogram/components/state-morph-icon`: **24 状态形变图标与动作即反馈 (State Morph Icon)**（汉堡/叉号形变、播放/暂停、发送变为完成反馈）

---

## 3. 详细技术规范与扩展阅读 (References)

- **组件全景分类与智能选型清单**：[references/components-catalog.md](./references/components-catalog.md) （核心选型决策树）
- **动效曲线与物理参数规范**：[references/motion-curves.md](./references/motion-curves.md)
- **自定义组件标准规范**：[references/component-specs.md](./references/component-specs.md)
- **WXSS 样式与布局规范**：[references/styling-standards.md](./references/styling-standards.md)
- **动效与交互优化指南**：[references/animation-guide.md](./references/animation-guide.md)

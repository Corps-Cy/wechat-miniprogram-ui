# 组件库全景分类清单与智能推荐指南 (Component Catalog & Recommendation Guide)

本文档是 AI Agent 与开发者的**核心选型决策树**。整合了来自 7 大工业级设计标准视频的 **24 款高端交互组件与微动效**，涵盖：
1. **01 凭证弹窗 (Popup Panels)**
2. **02 质感微动效 (Tactile Motions)**
3. **03 审美页面布局 (Aesthetic Layouts)**
4. **04 触觉高级交互与高级提示动效 (Advanced Interactions & Micro-Toasts)**

---

## 🗂️ 核心分类架构 (Taxonomy)

### 分类 01：凭证与卡券流体弹层 (01~06 Popup Panels)
专为会员卡、年卡、消费券、到场核销凭据、预订小票等场景打造的高沉浸度弹窗体系。

| 序号 | 组件标识 | 中文名称 | 核心物理参数 | 最佳适用场景 |
| :--- | :--- | :--- | :--- | :--- |
| **01** | `frosted-glass-sheet` | **玻璃面板浮起** | `BLUR: 26px`<br>`FILL: .42`<br>`STAGGER: 4f` | 12 个月年度计划、配额消耗打卡、保留底层上下文的轻量抽屉。 |
| **02** | `ring-count-sheet` | **圆环计数弹出** | `EASE: (0.2,0.7,0.2,1)`<br>`SCRM: 40%`<br>`RING: 1.2s` | 会员剩余有效天数、借阅期限、到期提醒，第一时间传递数字冲击。 |
| **03** | `tick-ruler-sheet` | **刻度尺扫到今天** | `TICKS: 53`<br>`STAGGER: 1f`<br>`REVEAL: INLINE` | 全年 53 周时间流逝、纸质手账感、需要原地无抖动展开防窥兑换码。 |
| **04** | `photo-drawer-sheet` | **照片抽屉贴合** | `ZOOM: 1.08 -> 1`<br>`OVERLAP: -22px`<br>`BAR: 0 -> 45%` | 美食套餐通兑、度假酒店海报，大图铺满微缩小，下沿抽屉紧密贴合。 |
| **05** | `flip-card-sheet` | **点击翻面凭证** | `PERSP: 1200px`<br>`SNAP: 90°`<br>`BACK: REVERSE` | 营地通兑、入场门票，正面是常规信息，原地 180° 翻转出示核销码。 |
| **06** | `drag-expand-sheet` | **下拉展开面板** | `LINE: DASHED`<br>`SWING: 2°`<br>`SNAP: 40%` | 餐桌凭证、就餐小票，带虚线齿孔与手柄，向下拉动超 40% 展开完整细则。 |

---

### 分类 02：质感微交互与核心组件 (07~14 Tactile Motions)
专为提升 App 和小程序界面“物理实体感”与“手感体验”打造的微互动效。

| 序号 | 组件标识 | 中文名称 | 核心物理参数 | 最佳适用场景 |
| :--- | :--- | :--- | :--- | :--- |
| **07** | `tilt-glare-card` | **3D倾斜光影面板** | `TILT: ±05°`<br>`GLARE: 100%`<br>`SPRING 回正` | 核心装备卡片、滑雪板展示、贵金属卡券，手指触摸跟随 3D 浮动与反光。 |
| **08** | `fluid-morph-sheet` | **流体胶囊形变** | `WIDTH: 176->490`<br>`RADIUS: 30->44`<br>`Fluid Morph` | 顶栏小胶囊按钮点击后如水滴般流畅延展为完整卡片，无生硬弹窗感。 |
| **09** | `shared-element-card` | **共享元素无缝展开** | `SCALE: 1.00->1.09`<br>`SHARED ELEMENT`<br>`Continuous` | 瀑布流卡片点击原地膨胀展开为详情页，无缝衔接无白屏推屏感。 |
| **10** | `odometer-chart` | **磁吸游标与滚动码表** | `SNAP: P01->P12`<br>`TICKER: ODOMETER`<br>`Haptic` | 运动速度折线图、股票走势，手指滑动自动磁吸节点，数字机械码表滚动。 |
| **11** | `elastic-bottom-sheet` | **阻尼弹性抽屉** | `STRETCH: 44px`<br>`LOW / MID / FULL`<br>`Velocity Snap` | 参数配置面板、多段式抽屉，拉到底/顶带橡皮筋阻尼拉伸，松手速度吸附。 |
| **12** | `conic-glow-card` | **动态弥散光晕边框** | `CONIC: 360° 4s`<br>`GLOW: 100%`<br>`2px Border` | AI 核心推荐卡片、高光功能区，2px 慢速旋转流光描边 + 呼吸弥散背光。 |
| **13** | `stagger-cascade-grid` | **物理弹簧交错流** | `STAGGER: 0.10s`<br>`SPRING CASCADE`<br>`0.6s Overshoot` | 照片墙、商品列表加载，各子元素错开 0.1s 带有微弱弹性向上滑入。支持点击重播与按压反馈。 |
| **14** | `press-scale-button` | **弹性微缩触觉反馈** | `SCALE: 0.96`<br>`OVERSHOOT: +1.1%`<br>`Inner Shadow` | 关键行动按钮（CTA），按下深凹压缩与内阴影，松手超调回弹 + 原生微震动。 |

---

### 分类 03：高级审美页面布局 (15~18 Aesthetic Layouts)
源自 Apple、Linear、Raycast 等现代设计语言，打破传统平铺直叙的信息层级：

| 序号 | 组件标识 | 中文名称 | 核心物理参数 | 最佳适用场景 |
| :--- | :--- | :--- | :--- | :--- |
| **15** | `bento-grid-wall` | **便当盒网格墙 (Bento Grid)** | `GAP: 20rpx`<br>`BLUR: 20px`<br>`ASPECT-RATIO` | 首页仪表盘、功能矩阵、多维度数据汇聚、品牌核心亮点概览。 |
| **16** | `stacked-deck-view` | **层叠卡片牌组 (Stacked Deck)** | `PERSP: 1000px`<br>`SCALE: 0.88/0.94/1`<br>`SWIPE: -80px` | 精选推荐、每日卡片、特权探索，卡片如纸牌向上推走滑出。 |
| **17** | `layered-exploded-panel` | **分层视差抽离面板 (Layered Exploded)** | `EXPLODE: 70rpx`<br>`TILT: -16deg / 22deg`<br>`MULTI-LAYER` | 硬件拆解、黑科技分层、复杂架构图解、VIP 权益分层透视展示。 |
| **18** | `overlap-stagger-card` | **重叠咬合与阶梯错位排版 (Overlap & Stagger)** | `OVERLAP: 42px`<br>`STAGGER: 40rpx`<br>`Z-INDEX: 3-TIER` | 告别等高平铺，通过负外边距压住标签与左右不对称阶梯，制造设计秩序感。 |

---

### 分类 04：触觉高级手势交互与高级提示动效 (19~24 Advanced Interactions & Micro-Toasts)
基于微信原生 WXS 运行于渲染层，实现 60fps 零延迟跟手交互，以及“不抢戏但在对的时候出现、用对的方式消失”的高级提示机制：

| 序号 | 组件标识 | 中文名称 | 核心物理参数 | 最佳适用场景 |
| :--- | :--- | :--- | :--- | :--- |
| **19** | `swipe-card-stack` | **左右滑动堆叠 (Swipe Stack)** | `SWIPE: ±120px`<br>`ROT: (dx/160)*14°`<br>`WXS TOUCH` | 探索挑选、Tinder 模式卡片快速决策、活动卡片连续浏览。 |
| **20** | `split-button-morph` | **裂变流体胶囊 (Split Button)** | `EXPAND: 420rpx`<br>`STAGGER: 0.12s`<br>`Haptic Medium` | 多功能快捷操作条、分享与收藏二合一、状态切换悬浮胶囊。 |
| **21** | `scroll-spy-category` | **滚动联动分类 (Scroll Spy)** | `STICKY: 0`<br>`ACTIVE-TRACK`<br>`Smooth Scroll` | 外卖点餐、电商分类瀑布流、长文档大纲导航。 |
| **22** | `undo-timer-bar` | **倒计时进度撤销条 (Undo Timer Bar)** | `COUNTDOWN: 4.0s`<br>`PROGRESS: 100->0`<br>`RESTORE INLINE` | 误删撤回、关键危险操作缓冲提示，倒计时看得到、走完才自然消失。 |
| **23** | `dot-rebound-scatter` | **红点原位弧线回缩与三级联动消散 (Dot Rebound)** | `ARC: (-20rpx,-14rpx)`<br>`SCALE: 1->0`<br>`STAGGER: 4f (70ms)` | 消息已读消除，红点缩回它来的地方而非原地淡出，单行/分组/顶部总数三层联动。 |
| **24** | `state-morph-icon` | **状态形变图标与动作即反馈 (State Morph Icon)** | `MORPH: PATH/CSS`<br>`ACTION AS FEEDBACK`<br>`HAPTIC SYNC` | 汉堡与叉号平滑形变、播放与暂停切换、点击发送自身变成飞行动作与完成状态。 |

---

## 🎯 业务场景决策树 (Decision Tree)

```mermaid
flowchart TD
    UserReq[用户交互需求] --> Type{需求类型?}
    
    Type -->|凭证 / 核销 / 弹层| Voucher[分类 01: 凭证弹窗 6款]
    Type -->|按键 / 图表 / 物理触感| Motion[分类 02: 质感微动效 8款]
    Type -->|页面布局 / 仪表盘 / 错位排版| Layout[分类 03: 审美页面布局 4款]
    Type -->|卡片手势 / 胶囊 / 撤销 / 红点 / 图标形变| Touch[分类 04: 触觉与提示交互 6款]
    
    Voucher --> V1[01 玻璃浮起 / 02 圆环计数 / 03 刻度扫到今天 / 04 照片抽屉 / 05 原地翻面 / 06 下拉展开]
    Motion --> M1[07 3D倾斜 / 08 流体胶囊 / 09 共享元素 / 10 磁吸滚动 / 11 阻尼抽屉 / 12 弥散光晕 / 13 物理弹簧 / 14 弹性微缩]
    Layout --> L1[15 便当盒网格 / 16 层叠卡片牌组 / 17 分层视差抽离 / 18 重叠错位排版]
    Touch --> T1[19 左右滑动卡片 / 20 裂变流体胶囊 / 21 滚动联动列表 / 22 倒计时撤销条 / 23 红点弧线回缩 / 24 状态形变图标]
```

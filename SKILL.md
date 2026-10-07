---
name: wechat-miniprogram-ui
description: >-
  Expert guide and generator for WeChat Mini Program (微信小程序) UI design and custom components.
  Use this skill whenever creating, designing, refactoring, or optimizing WeChat Mini Program UI components,
  layouts (WXML, WXSS, rpx responsive units), styling systems, interactive animations, or component architectures.
---

# WeChat Mini Program UI & Component Design Skill (微信小程序 UI/组件技能)

A specialized skill for building high-quality, performant, and accessible WeChat Mini Program UI components and layouts.

---

## 1. 核心职责与设计原则 (Core Principles)

- **小程序规范优先**：严格遵循微信小程序官方自定义组件规范（WXML、WXSS、JS/TS、JSON 四件套）。
- **移动端与 rpx 适配**：以 750rpx 视觉稿为基准设计响应式布局，严控固定 px 带来的机型适配问题。
- **渲染性能红线**：
  - 避免频繁与大体积的 `setData`，局部刷新精确到具体路径字段；
  - 复杂手势与高频动画优先使用 **WXS** 脚本实现视图层响应，绕过逻辑层-视图层通信开销。
- **样式隔离规范**：合理声明 `styleIsolation`（`isolated` / `apply-shared` / `shared`），防止全局样式污染。
- **可复用与语义化**：组件遵循语义化命名、属性类型强约束、完善的事件触发（`triggerEvent`）机制与 Slot 插槽支持。

---

## 2. 知识库索引 (References & Guidelines)

详细技术规范与最佳实践请参考子文档：
- **自定义组件规范**：[references/component-specs.md](./references/component-specs.md)
- **WXSS 样式与布局规范**：[references/styling-standards.md](./references/styling-standards.md)
- **动效与交互优化**：[references/animation-guide.md](./references/animation-guide.md)
- **性能优化清单**：[references/performance-checklist.md](./references/performance-checklist.md)

---

## 3. 工作流 (Workflow)

```mermaid
flowchart TD
    A[接收 UI / 组件需求] --> B[分析组件结构与交互]
    B --> C[定义 JSON 声明 & 接口规范 Properties / Events]
    C --> D[编写 WXML 结构与语义化 Slot]
    D --> E[编写 WXSS 样式与 rpx 响应式布局]
    E --> F[实现 TS / JS 逻辑与生命周期]
    F --> G[高频交互使用 WXS 优化 / 审查 setData 性能]
    G --> H[输出标准四件套代码与使用示例]
```

---

## 4. 预留扩展 (Custom Extensions)

> 本文档结构已就绪，后续会根据你提供的定制提示词与场景规则进行持续补充。

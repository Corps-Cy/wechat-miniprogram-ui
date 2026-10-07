# 微信小程序页面与架构规范 (Page Architecture Standards)

为后续页面级开发（落地页、凭证详情页、核销看板等）提供统一的架构与工程约定：

## 1. 目录结构规范
```text
src/
├── components/          # 原子与业务通用组件
│   └── <component-name>/
├── pages/               # 页面级模块
│   └── <page-name>/
│       ├── index.wxml
│       ├── index.wxss
│       ├── index.ts (或 index.js)
│       └── index.json
├── assets/              # 全局静态图标与图片
└── styles/              # 全局主题变量、通用 Mixin、安全区样式
```

## 2. 页面与组件协作规范
- **数据驱动**：页面维护核心业务数据模型，通过 `properties` 单向传递给凭证/弹层组件。
- **事件向上抛出**：组件内所有关闭、翻面、核销、拖拽触发均通过 `this.triggerEvent('change', ...)` 统一抛送，由父页面决策业务行为。
- **页面生命周期通信**：善用 `pageLifetimes` 监听页面激活（`show`）与失活（`hide`），在页面切换时自动重置动效或定时器。

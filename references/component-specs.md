# 微信小程序自定义组件规范 (Component Specifications)

## 1. 组件四件套结构
每个自定义组件包含以下文件：
- `index.json`: 声明为组件与依赖声明
- `index.wxml`: 组件模板
- `index.wxss`: 组件私有样式
- `index.ts` (或 `index.js`): 组件逻辑与生命周期

## 2. JSON 配置规范
```json
{
  "component": true,
  "usingComponents": {},
  "styleIsolation": "apply-shared"
}
```

## 3. Component 构造器模板
```typescript
Component({
  options: {
    multipleSlots: true,       // 启用多 slot 支持
    styleIsolation: 'isolated' // 样式隔离策略
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {
    internalState: false
  },
  lifetimes: {
    attached() {
      // 组件挂载
    },
    detached() {
      // 组件销毁
    }
  },
  pageLifetimes: {
    show() {
      // 页面显示
    },
    hide() {
      // 页面隐藏
    }
  },
  methods: {
    handleTap(e: WechatMiniprogram.TouchEvent) {
      if (this.data.disabled) return;
      this.triggerEvent('action', { timestamp: Date.now() });
    }
  }
});
```

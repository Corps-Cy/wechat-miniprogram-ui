# 微信小程序动效与交互规范 (Animation & Interaction Guide)

1. **CSS 动画优先**：
   - 简单的渐变、展开、弹跳首选纯 CSS 属性（`transition`, `@keyframes`），并优先使用 `transform` 与 `opacity` 触发 GPU 合成层加速，避免引起重排（reflow）。

2. **WXS 响应手势**：
   - 拖拽卡片、滑动删除等手势交互，采用 WXS 事件响应机制：
     ```html
     <wxs module="handler" src="./handler.wxs"></wxs>
     <view bindtouchstart="{{handler.touchStart}}" bindtouchmove="{{handler.touchMove}}" bindtouchend="{{handler.touchEnd}}"></view>
     ```

3. **关键帧动画与 wx.createAnimation**：
   - 复杂编排流程可以使用 `this.animate` 或 `wx.createAnimation` 控制。

# WXSS 样式与布局规范 (Styling Standards)

## 1. 响应式与 rpx
- 微信小程序以 **750rpx** 作为屏幕宽度基准。
- 普通布局尺寸一律使用 `rpx`。
- 极细边框（如 1px 细线）在高清屏上建议使用 `1px` 并结合 `transform: scale(0.5)` 或伪类实现。

## 2. 现代布局模式
- 优先采用 **Flexbox** 与 **CSS Grid**，严禁使用 float 浮动布局。
- 推荐使用 CSS 变量（CSS Custom Properties）统一定义主题色、文字大小、圆角与间距。

```wxss
/* CSS 变量与设计令牌 */
:host {
  --primary-color: #07c160;
  --text-main: #1f1f1f;
  --text-muted: #8c8c8c;
  --radius-md: 16rpx;
}
```

## 3. 安全区适配 (Safe Area)
适配全面屏（iPhone 底部横条与异形屏）：
```wxss
.bottom-bar {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```

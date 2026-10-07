# 小程序性能优化与红线清单 (Performance Checklist)

1. **setData 治理**：
   - 严禁将与界面渲染无关的业务中间变量挂载在 `data` 中。
   - 局部更新列表元素使用路径语法：`this.setData({ ['list[' + index + '].title']: newTitle })`。
   - 避免在滚动事件（`onPageScroll`）中同步高频触发 `setData`。

2. **组件懒加载**：
   - 在 `app.json` 中配置 `"lazyCodeLoading": "requiredComponents"`，实现按需注入。

3. **视图层交互优先 (WXS)**：
   - 复杂手势拖拽、侧滑菜单、吸顶联动等高频视图交互，应使用 WXS 监听事件并在视图层直接改变样式，避免跨线程开销。

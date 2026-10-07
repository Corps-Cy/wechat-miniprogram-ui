Component({
  properties: {},

  data: {
    unreadCount: 3,
    categories: [
      { id: 1, name: '全部', count: 3, hasDot: true },
      { id: 2, name: '工作', count: 2, hasDot: true },
      { id: 3, name: '生活', count: 1, hasDot: true }
    ],
    items: [
      { id: 1, title: '用户中心改版设计稿评审', catId: 2, unread: true, dissipating: false, highlighted: false },
      { id: 2, title: '明早 09:30 团队周会日程', catId: 2, unread: true, dissipating: false, highlighted: false },
      { id: 3, title: '周末羽毛球俱乐部预订确认', catId: 3, unread: true, dissipating: false, highlighted: false }
    ]
  },

  methods: {
    handleRead(e) {
      const id = e.currentTarget.dataset.id;
      const index = this.data.items.findIndex(item => item.id === id);
      if (index === -1) return;

      const item = this.data.items[index];
      if (!item.unread) return;

      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });

      // 阶段 1：红点沿弧线收回原位 + 该行高亮闪烁
      const updatedItems = [...this.data.items];
      updatedItems[index].dissipating = true;
      updatedItems[index].highlighted = true;
      this.setData({ items: updatedItems });

      // 阶段 2：错开 4 帧 (约 70ms) 联动上级分类红点递减
      setTimeout(() => {
        const remainingUnread = this.data.items.filter(i => i.id !== id && i.unread).length;
        this.setData({
          unreadCount: remainingUnread
        });
      }, 70);

      // 阶段 3：动效收尾，红点彻底消失，行恢复常态
      setTimeout(() => {
        const finalItems = [...this.data.items];
        finalItems[index].unread = false;
        finalItems[index].dissipating = false;
        finalItems[index].highlighted = false;
        this.setData({ items: finalItems });
      }, 350);
    },

    resetAll() {
      const resetItems = this.data.items.map(item => ({
        ...item,
        unread: true,
        dissipating: false,
        highlighted: false
      }));
      this.setData({
        items: resetItems,
        unreadCount: 3
      });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });
    }
  }
});

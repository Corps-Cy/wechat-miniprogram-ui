Component({
  properties: {},

  data: {
    items: [
      { id: 1, title: 'Swap the H5 cover to portrait', tag: 'Work', time: '18:00' },
      { id: 2, title: 'Book Thursday train to Chengdu', tag: 'Life', time: 'Tomorrow' },
      { id: 3, title: 'Finish Designing Design ch.4', tag: 'Read', time: 'This week' }
    ],
    showUndo: false,
    deletedItem: null,
    deletedIndex: -1,
    progress: 100,
    timer: null,
    stepTimer: null
  },

  methods: {
    deleteItem(e) {
      const id = e.currentTarget.dataset.id;
      const index = this.data.items.findIndex(item => item.id === id);
      if (index === -1) return;

      const deletedItem = this.data.items[index];
      const newItems = this.data.items.filter(item => item.id !== id);

      if (this.data.timer) clearTimeout(this.data.timer);
      if (this.data.stepTimer) clearInterval(this.data.stepTimer);

      this.setData({
        items: newItems,
        deletedItem,
        deletedIndex: index,
        showUndo: true,
        progress: 100
      });

      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });

      // 4 秒倒计时进度条
      const totalMs = 4000;
      const interval = 50;
      let elapsed = 0;

      const stepTimer = setInterval(() => {
        elapsed += interval;
        const remaining = Math.max(0, 100 - (elapsed / totalMs) * 100);
        this.setData({ progress: remaining });
        if (remaining <= 0) {
          clearInterval(stepTimer);
        }
      }, interval);

      const timer = setTimeout(() => {
        this.setData({
          showUndo: false,
          deletedItem: null,
          deletedIndex: -1
        });
      }, totalMs);

      this.setData({ timer, stepTimer });
    },

    undoDelete() {
      if (!this.data.deletedItem) return;

      if (this.data.timer) clearTimeout(this.data.timer);
      if (this.data.stepTimer) clearInterval(this.data.stepTimer);

      const newItems = [...this.data.items];
      newItems.splice(this.data.deletedIndex, 0, this.data.deletedItem);

      this.setData({
        items: newItems,
        showUndo: false,
        deletedItem: null,
        deletedIndex: -1,
        progress: 100
      });

      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });
    }
  }
});

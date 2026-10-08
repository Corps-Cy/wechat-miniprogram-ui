Component({
  properties: {},

  data: {
    selectedIndex: 2, // 默认居中选中项
    dialAngle: 0,
    items: [
      { id: 1, name: '阅读', quota: '2/3', icon: '📖' },
      { id: 2, name: '写作', quota: '0/2', icon: '✍️' },
      { id: 3, name: '代码', quota: '1/2', icon: '💻' },
      { id: 4, name: '晨练', quota: '1/1', icon: '🏃' },
      { id: 5, name: '冥想', quota: '0/1', icon: '🧘' }
    ]
  },

  methods: {
    selectDialItem(e) {
      const idx = e.currentTarget.dataset.index;
      // 5 个刻度分布在 -40deg ~ +40deg
      // 选中项转到指针正上方 0deg
      const stepAngle = 20;
      const angle = (2 - idx) * stepAngle;

      this.setData({
        selectedIndex: idx,
        dialAngle: angle
      });

      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });
    },

    onPrev() {
      if (this.data.selectedIndex > 0) {
        this.selectDialItem({ currentTarget: { dataset: { index: this.data.selectedIndex - 1 } } });
      }
    },

    onNext() {
      if (this.data.selectedIndex < this.data.items.length - 1) {
        this.selectDialItem({ currentTarget: { dataset: { index: this.data.selectedIndex + 1 } } });
      }
    },

    onStartFocus() {
      const cur = this.data.items[this.data.selectedIndex];
      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });
      wx.showToast({ title: '开始专注: ' + cur.name, icon: 'none' });
    }
  }
});

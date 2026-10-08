Component({
  properties: {},

  data: {
    activeDayIndex: 2, // 周三
    days: [
      { name: '周一', weather: '☀️', temp: '27°', val: 27 },
      { name: '周二', weather: '⛅', temp: '25°', val: 25 },
      { name: '周三', weather: '🌧️', temp: '22°', val: 22 },
      { name: '周四', weather: '☀️', temp: '24°', val: 24 },
      { name: '周五', weather: '🌤️', temp: '26°', val: 26 }
    ],
    // 曲线圆点横向百分比定位
    dotLeftPercent: 50
  },

  methods: {
    selectDay(e) {
      const idx = e.currentTarget.dataset.index;
      // 5 个日期块，对应 10%, 30%, 50%, 70%, 90%
      const percents = [10, 30, 50, 70, 90];
      this.setData({
        activeDayIndex: idx,
        dotLeftPercent: percents[idx]
      });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });
    },

    onPackTap() {
      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });
      wx.showToast({ title: '开始整理行囊', icon: 'success' });
    }
  }
});

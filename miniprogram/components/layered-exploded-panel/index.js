Component({
  properties: {},

  data: {
    isExploded: false
  },

  methods: {
    onTouchStart() {
      this.setData({ isExploded: true });
      wx.vibrateShort && wx.vibrateShort({ type: 'medium' });
    },

    onTouchEnd() {
      this.setData({ isExploded: false });
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });
    }
  }
});

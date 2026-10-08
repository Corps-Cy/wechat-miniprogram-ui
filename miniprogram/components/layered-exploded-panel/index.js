Component({
  properties: {},

  data: {
    isExploded: false
  },

  methods: {
    toggleExplode() {
      const next = !this.data.isExploded;
      this.setData({ isExploded: next });
      if (wx.vibrateShort) {
        wx.vibrateShort({ type: next ? 'medium' : 'light' });
      }
    },

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

Component({
  properties: {},

  data: {
    isPressed: false,
    isOvershooting: false
  },

  methods: {
    onTouchStart() {
      this.setData({
        isPressed: true,
        isOvershooting: false
      });
      wx.vibrateShort && wx.vibrateShort({ type: 'medium' });
    },

    onTouchEnd() {
      this.setData({
        isPressed: false,
        isOvershooting: true
      });
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });

      // 120ms 后回正为 1.000
      setTimeout(() => {
        this.setData({ isOvershooting: false });
        this.triggerEvent('action');
      }, 140);
    }
  }
});

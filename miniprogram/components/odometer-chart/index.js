Component({
  properties: {},

  data: {
    snapIndex: 7,
    currentValue: '58.0'
  },

  methods: {
    onSnap(e) {
      if (this.data.snapIndex !== e.index) {
        wx.vibrateShort && wx.vibrateShort({ type: 'light' });
      }
      this.setData({
        snapIndex: e.index,
        currentValue: e.value
      });
    }
  }
});

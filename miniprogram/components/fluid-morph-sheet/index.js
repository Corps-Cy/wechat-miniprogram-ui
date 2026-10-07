Component({
  properties: {},

  data: {
    isExpanded: false
  },

  methods: {
    toggleMorph() {
      const next = !this.data.isExpanded;
      this.setData({ isExpanded: next });
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });
      this.triggerEvent('morph', { expanded: next });
    }
  }
});

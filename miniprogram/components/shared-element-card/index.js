Component({
  properties: {},

  data: {
    isExpanded: false
  },

  methods: {
    handleToggle() {
      const next = !this.data.isExpanded;
      this.setData({ isExpanded: next });
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });
      this.triggerEvent('toggle', { expanded: next });
    }
  }
});

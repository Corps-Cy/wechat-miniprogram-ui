Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.setData({ rendered: true });
        } else {
          setTimeout(() => {
            if (!this.data.visible) {
              this.setData({ rendered: false });
            }
          }, 450);
        }
      }
    }
  },

  data: {
    rendered: false,
    currentAnchor: 'MID'
  },

  methods: {
    onHeightUpdate() {},

    onSnapAnchor(e) {
      let anchor = 'MID';
      if (e.snapHeight >= 500) anchor = 'FULL';
      else if (e.snapHeight <= 220) anchor = 'LOW';

      this.setData({ currentAnchor: anchor });
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });
    },

    preventTouchMove() {},

    handleClose() {
      this.triggerEvent('close');
    }
  }
});

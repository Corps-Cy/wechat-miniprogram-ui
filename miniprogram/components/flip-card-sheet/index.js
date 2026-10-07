Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.setData({ rendered: true, flipped: false });
        } else {
          setTimeout(() => {
            if (!this.data.visible) {
              this.setData({ rendered: false, flipped: false });
            }
          }, 450);
        }
      }
    }
  },

  data: {
    rendered: false,
    flipped: false
  },

  methods: {
    handleFlip() {
      const nextFlipped = !this.data.flipped;
      this.setData({ flipped: nextFlipped });
      // 翻转到一半时触发震动
      setTimeout(() => {
        wx.vibrateShort && wx.vibrateShort({ type: 'medium' });
      }, 400);
      this.triggerEvent('flip', { flipped: nextFlipped });
    },

    preventTouchMove() {},

    handleClose() {
      this.triggerEvent('close');
    }
  }
});

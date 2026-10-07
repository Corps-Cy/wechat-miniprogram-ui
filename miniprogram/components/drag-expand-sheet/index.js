Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.setData({ rendered: true, isExpanded: false });
          this.startAnimation();
        } else {
          setTimeout(() => {
            if (!this.data.visible) {
              this.setData({ rendered: false, isExpanded: false });
            }
          }, 450);
        }
      }
    }
  },

  data: {
    rendered: false,
    isExpanded: false,
    displayDays: 0,
    targetDays: 163
  },

  methods: {
    startAnimation() {
      const target = this.data.targetDays;
      const duration = 600;
      const startTime = Date.now();

      const timer = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * ease);

        this.setData({ displayDays: current });

        if (progress < 1 && this.data.visible) {
          setTimeout(timer, 16);
        }
      };

      timer();
    },

    onStateChange(e) {
      this.setData({ isExpanded: e.expanded });
      wx.vibrateShort && wx.vibrateShort({ type: 'medium' });
      this.triggerEvent('expandChange', { expanded: e.expanded });
    },

    preventTouchMove() {},

    handleClose() {
      this.triggerEvent('close');
    }
  }
});

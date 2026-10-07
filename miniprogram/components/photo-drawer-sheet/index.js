Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.setData({ rendered: true });
          this.startAnimation();
        } else {
          setTimeout(() => {
            if (!this.data.visible) {
              this.setData({ rendered: false, progressRatio: 0 });
            }
          }, 500);
        }
      }
    }
  },

  data: {
    rendered: false,
    displayDays: 0,
    targetDays: 163,
    progressRatio: 0,
    targetRatio: 45, // 45% 剩余
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },

  methods: {
    startAnimation() {
      // 抽屉推入后涨进度条
      setTimeout(() => {
        if (this.data.visible) {
          this.setData({ progressRatio: this.data.targetRatio });
        }
      }, 400);

      // 数字滚动
      const target = this.data.targetDays;
      const duration = 700;
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

    preventTouchMove() {},

    handleClose() {
      this.triggerEvent('close');
    },

    handleChange() {
      this.triggerEvent('change');
    },

    handleUse() {
      this.triggerEvent('use');
    }
  }
});

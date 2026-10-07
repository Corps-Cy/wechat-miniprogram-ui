Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.setData({ rendered: true });
          this.startEntranceAnimation();
        } else {
          this.resetAnimation();
          setTimeout(() => {
            if (!this.data.visible) {
              this.setData({ rendered: false });
            }
          }, 500);
        }
      }
    }
  },

  data: {
    rendered: false,
    displayCount: 0,
    displayPercent: 0,
    targetDays: 163,
    totalDays: 365
  },

  methods: {
    startEntranceAnimation() {
      // 0.5 秒底部面板升起到位后，落定瞬间开始画圆环并同步滚数字
      setTimeout(() => {
        if (!this.data.visible) return;

        const targetDays = this.data.targetDays;
        const totalDays = this.data.totalDays;
        const targetPercent = (targetDays / totalDays) * 100;
        const duration = 1200; // 1.2 秒
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // cubic-bezier(0.2, 0.7, 0.2, 1) 近似缓动
          const ease = 1 - Math.pow(1 - progress, 3);

          const currentCount = Math.round(targetDays * ease);
          const currentPercent = (targetPercent * ease).toFixed(1);

          this.setData({
            displayCount: currentCount,
            displayPercent: currentPercent
          });

          if (progress < 1 && this.data.visible) {
            setTimeout(animate, 16);
          } else if (progress >= 1) {
            // 完成时触发轻微震动增强物理反馈
            wx.vibrateShort && wx.vibrateShort({ type: 'light' });
          }
        };

        animate();
      }, 500);
    },

    resetAnimation() {
      this.setData({
        displayCount: 0,
        displayPercent: 0
      });
    },

    preventTouchMove() {},

    handleClose() {
      this.triggerEvent('close');
    },

    handleShelf() {
      this.triggerEvent('shelf');
    },

    handleContinue() {
      this.triggerEvent('continue');
    }
  }
});

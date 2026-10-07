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
              this.setData({ rendered: false, revealed: false });
            }
          }, 450);
        }
      }
    }
  },

  data: {
    rendered: false,
    revealed: false,
    displayDays: 0,
    targetDays: 163,
    todayWeek: 24, // 53 周中的第 24 周
    maskedCode: 'LF......',
    fullCode: 'LFTK-2QXP',
    ticks: []
  },

  lifetimes: {
    attached() {
      this.buildTicks();
    }
  },

  methods: {
    buildTicks() {
      const total = 53;
      const today = this.data.todayWeek;
      const ticks = [];
      for (let i = 1; i <= total; i++) {
        ticks.push({
          index: i,
          isPassed: i < today,
          isToday: i === today
        });
      }
      this.setData({ ticks });
    },

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
        } else if (progress >= 1) {
          // 刻度扫到今天停住时触发轻微震动
          setTimeout(() => {
            wx.vibrateShort && wx.vibrateShort({ type: 'medium' });
          }, this.data.todayWeek * 16);
        }
      };

      timer();
    },

    handleToggleReveal() {
      const next = !this.data.revealed;
      this.setData({ revealed: next });
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });
      this.triggerEvent('toggleReveal', { revealed: next });
    },

    preventTouchMove() {},

    handleClose() {
      this.triggerEvent('close');
    },

    handleRefresh() {
      this.triggerEvent('refresh');
    },

    handleWrite() {
      this.triggerEvent('write');
    }
  }
});

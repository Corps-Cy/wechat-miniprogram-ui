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
              this.setData({ rendered: false });
            }
          }, 450);
        }
      }
    }
  },

  data: {
    rendered: false,
    displayDays: 0,
    activeMonthIndex: 5, // 第 6 个月（即 6 月/9 月标点）
    monthsData: [
      { month: 1, ratio: 100 },
      { month: 2, ratio: 100 },
      { month: 3, ratio: 100 },
      { month: 4, ratio: 100 },
      { month: 5, ratio: 100 },
      { month: 6, ratio: 65 }, // 当前今天月
      { month: 7, ratio: 0 },
      { month: 8, ratio: 0 },
      { month: 9, ratio: 0 },
      { month: 10, ratio: 0 },
      { month: 11, ratio: 0 },
      { month: 12, ratio: 0 }
    ]
  },

  methods: {
    startAnimation() {
      const target = 163;
      const duration = 800;
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

    preventTouchMove() {
      // 阻断底层滚动穿透
    },

    handleClose() {
      this.triggerEvent('close');
    },

    handleConfirm() {
      this.triggerEvent('confirm');
    }
  }
});

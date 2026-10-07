Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal: boolean) {
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
    },
    title: {
      type: String,
      value: '会员专属额度剩余'
    },
    subtitle: {
      type: String,
      value: '当前账期将于本月最后一日结清'
    },
    total: {
      type: Number,
      value: 100
    },
    remaining: {
      type: Number,
      value: 68
    },
    unit: {
      type: String,
      value: '天'
    },
    label: {
      type: String,
      value: '剩余有效时间'
    }
  },

  data: {
    rendered: false,
    displayCount: 0,
    currentDashOffset: 440,
    animatingRing: false
  },

  methods: {
    startEntranceAnimation() {
      // 0.5 秒底部面板升起到位后，落定瞬间开始画圆环并同步滚数字
      setTimeout(() => {
        if (!this.data.visible) return;
        
        // 440 是周长 (2 * PI * 70 = 439.82)
        const circumference = 440;
        const ratio = Math.min(Math.max(this.data.remaining / this.data.total, 0), 1);
        const targetOffset = circumference * (1 - ratio);

        this.setData({
          currentDashOffset: targetOffset,
          animatingRing: true
        });

        this.animateNumber(this.data.remaining, 1200);
      }, 500);
    },

    animateNumber(target: number, duration: number) {
      const startTime = Date.now();
      const startVal = 0;

      const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // 使用与 CSS 类似的缓动计算 (1 - (1 - progress)^3)
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (target - startVal) * ease);

        this.setData({ displayCount: current });

        if (progress < 1 && this.data.visible) {
          setTimeout(update, 16);
        }
      };

      update();
    },

    resetAnimation() {
      this.setData({
        displayCount: 0,
        currentDashOffset: 440,
        animatingRing: false
      });
    },

    handleClose() {
      this.triggerEvent('close');
    },

    handleAction() {
      this.triggerEvent('action', { remaining: this.data.remaining });
    }
  }
});

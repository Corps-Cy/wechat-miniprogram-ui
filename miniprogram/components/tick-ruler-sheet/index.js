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
              this.setData({ rendered: false, revealed: false });
            }
          }, 450);
        }
      }
    },
    title: {
      type: String,
      value: '2026 年度大师课兑换凭证'
    },
    tag: {
      type: String,
      value: '生效中'
    },
    currentWeek: {
      type: Number,
      value: 28,
      observer() {
        this.buildTicks();
      }
    },
    fullCode: {
      type: String,
      value: 'AGY-8892-K92X'
    },
    daysPassed: {
      type: Number,
      value: 196
    },
    daysRemaining: {
      type: Number,
      value: 169
    }
  },

  data: {
    rendered: false,
    revealed: false,
    maskedCode: 'AGY-••••-••••',
    ticks: []
  },

  lifetimes: {
    attached() {
      this.buildTicks();
    }
  },

  methods: {
    buildTicks() {
      const totalWeeks = 53;
      const todayWeek = this.data.currentWeek;
      const ticks = [];

      for (let i = 1; i <= totalWeeks; i++) {
        ticks.push({
          index: i,
          isPassed: i < todayWeek,
          isToday: i === todayWeek
        });
      }

      this.setData({ ticks });
    },

    handleToggleReveal() {
      this.setData({ revealed: !this.data.revealed });
      this.triggerEvent('reveal', { revealed: this.data.revealed });
    },

    handleClose() {
      this.triggerEvent('close');
    }
  }
});

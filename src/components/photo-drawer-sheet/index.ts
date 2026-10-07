Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newVal: boolean) {
        if (newVal) {
          this.setData({ rendered: true });
        } else {
          setTimeout(() => {
            if (!this.data.visible) {
              this.setData({ rendered: false });
            }
          }, 500);
        }
      }
    },
    imageUrl: {
      type: String,
      value: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    },
    category: {
      type: String,
      value: '奢享度假·专属通兑'
    },
    title: {
      type: String,
      value: '三亚亚特兰蒂斯酒店'
    },
    subtitle: {
      type: String,
      value: '海景套房 2 晚连住通兑凭证'
    },
    totalCount: {
      type: Number,
      value: 5
    },
    remainingCount: {
      type: Number,
      value: 3,
      observer() {
        this.calcProgress();
      }
    }
  },

  data: {
    rendered: false,
    progressRatio: 60
  },

  lifetimes: {
    attached() {
      this.calcProgress();
    }
  },

  methods: {
    calcProgress() {
      const { totalCount, remainingCount } = this.data;
      if (!totalCount) return;
      const progressRatio = Math.round((remainingCount / totalCount) * 100);
      this.setData({ progressRatio });
    },

    handleClose() {
      this.triggerEvent('close');
    },

    handleAction() {
      this.triggerEvent('action');
    }
  }
});

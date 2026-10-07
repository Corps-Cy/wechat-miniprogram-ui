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
          }, 450);
        }
      }
    },
    title: {
      type: String,
      value: '年度权益凭证使用记录'
    },
    subtitle: {
      type: String,
      value: '每个月按配额使用，已用月份高亮标注'
    },
    monthsData: {
      type: Array,
      value: [
        { month: 1, label: '1月', ratio: 100 },
        { month: 2, label: '2月', ratio: 100 },
        { month: 3, label: '3月', ratio: 80 },
        { month: 4, label: '4月', ratio: 100 },
        { month: 5, label: '5月', ratio: 60 },
        { month: 6, label: '6月', ratio: 40 },
        { month: 7, label: '7月', ratio: 0 },
        { month: 8, label: '8月', ratio: 0 },
        { month: 9, label: '9月', ratio: 0 },
        { month: 10, label: '10月', ratio: 0 },
        { month: 11, label: '11月', ratio: 0 },
        { month: 12, label: '12月', ratio: 0 }
      ]
    },
    usedCount: {
      type: Number,
      value: 6
    }
  },

  data: {
    rendered: false
  },

  methods: {
    handleClose() {
      this.triggerEvent('close');
    },
    handleConfirm() {
      this.triggerEvent('confirm');
    }
  }
});

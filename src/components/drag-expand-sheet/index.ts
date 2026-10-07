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
              this.setData({ rendered: false, isExpanded: false });
            }
          }, 450);
        }
      }
    },
    title: {
      type: String,
      value: '周末双人自助晚餐凭证'
    },
    subtitle: {
      type: String,
      value: '希尔顿国际酒店 · 豪华全日制餐厅'
    }
  },

  data: {
    rendered: false,
    isExpanded: false
  },

  methods: {
    // 由 WXS 的 ins.callMethod 反向调用通知逻辑层
    onStateChange(e: { expanded: boolean }) {
      this.setData({ isExpanded: e.expanded });
      this.triggerEvent('expandChange', { expanded: e.expanded });
    },

    handleClose() {
      this.triggerEvent('close');
    },

    handleConfirm() {
      this.triggerEvent('confirm');
    }
  }
});

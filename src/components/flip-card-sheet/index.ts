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
              this.setData({ rendered: false, flipped: false });
            }
          }, 450);
        }
      }
    },
    title: {
      type: String,
      value: 'VIP 专属沙龙入场券'
    },
    desc: {
      type: String,
      value: '凭此卡券可享受优先接待通道及特调茶歇服务，请在入场时主动出示背面核销凭据。'
    },
    validDate: {
      type: String,
      value: '2026.12.31 前有效'
    },
    verifyCode: {
      type: String,
      value: '9840 2851 0932'
    },
    qrCodeUrl: {
      type: String,
      value: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=AGY-VIP-TOKEN-2026'
    }
  },

  data: {
    rendered: false,
    flipped: false
  },

  methods: {
    handleFlip() {
      const nextFlipped = !this.data.flipped;
      this.setData({ flipped: nextFlipped });
      this.triggerEvent('flip', { flipped: nextFlipped });
    },

    handleClose() {
      this.triggerEvent('close');
    }
  }
});

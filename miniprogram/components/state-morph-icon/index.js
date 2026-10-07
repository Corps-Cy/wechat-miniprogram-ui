Component({
  properties: {},

  data: {
    // 01 菜单转关闭 (Hamburger -> Close)
    menuOpen: false,
    // 02 播放转暂停 (Play -> Pause)
    isPlaying: false,
    // 03 发送转已发送纸飞机 (Send -> Sent check)
    sendState: 'idle' // 'idle' | 'sending' | 'sent'
  },

  methods: {
    toggleMenu() {
      this.setData({ menuOpen: !this.data.menuOpen });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });
    },

    togglePlay() {
      this.setData({ isPlaying: !this.data.isPlaying });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });
    },

    handleSend() {
      if (this.data.sendState !== 'idle') return;

      this.setData({ sendState: 'sending' });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });

      setTimeout(() => {
        this.setData({ sendState: 'sent' });
        if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });

        setTimeout(() => {
          this.setData({ sendState: 'idle' });
        }, 2200);
      }, 700);
    }
  }
});

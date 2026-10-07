Component({
  properties: {},

  data: {
    state: 'READY', // 'READY' | 'RUNNING' | 'PAUSED'
    isSplit: false,
    isPaused: false,
    seconds: 0,
    formattedTime: '00:00'
  },

  timerId: null as any,

  methods: {
    handleStart() {
      this.setData({
        isSplit: true,
        state: 'RUNNING',
        isPaused: false
      });
      wx.vibrateShort && wx.vibrateShort({ type: 'medium' });
      this.startTimer();
    },

    handlePause() {
      if (this.data.isPaused) {
        this.setData({ isPaused: false, state: 'RUNNING' });
        this.startTimer();
      } else {
        this.setData({ isPaused: true, state: 'PAUSED' });
        this.stopTimer();
      }
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });
    },

    handleEnd() {
      this.stopTimer();
      this.setData({
        isSplit: false,
        isPaused: false,
        state: 'READY',
        seconds: 0,
        formattedTime: '00:00'
      });
      wx.vibrateShort && wx.vibrateShort({ type: 'medium' });
    },

    startTimer() {
      this.stopTimer();
      this.timerId = setInterval(() => {
        const next = this.data.seconds + 1;
        const mins = Math.floor(next / 60);
        const secs = next % 60;
        const formattedTime = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
        this.setData({ seconds: next, formattedTime });
      }, 1000);
    },

    stopTimer() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }
  }
});

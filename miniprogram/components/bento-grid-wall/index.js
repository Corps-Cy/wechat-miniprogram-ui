Component({
  properties: {},

  data: {
    habits: [
      { id: 1, name: '喝水', time: '07:48', icon: '💧', done: true },
      { id: 2, name: '读书', time: '08:30', icon: '📖', done: true },
      { id: 3, name: '静坐', time: '07:20', icon: '🧘', done: true },
      { id: 4, name: '散步', time: '6000步', icon: '🚶', done: false }
    ]
  },

  methods: {
    toggleHabit(e) {
      const id = e.currentTarget.dataset.id;
      const list = this.data.habits.map(item => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      });

      this.setData({ habits: list });
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });
      this.triggerEvent('toggle', { id });
    }
  }
});

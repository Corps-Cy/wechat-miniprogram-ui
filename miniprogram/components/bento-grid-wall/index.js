Component({
  properties: {},

  data: {
    totalHabits: 4,
    completedCount: 3,
    ringPercent: 75,
    activeFilter: 'all', // 'all' | 'pending' | 'done'
    habits: [
      { id: 1, name: '喝水', time: '07:48', icon: '💧', done: true },
      { id: 2, name: '读书', time: '08:30', icon: '📖', done: true },
      { id: 3, name: '静坐', time: '07:20', icon: '🧘', done: true },
      { id: 4, name: '散步', time: '6000步', icon: '🚶', done: false }
    ],
    filteredHabits: []
  },

  lifetimes: {
    attached() {
      this.updateStats();
    }
  },

  methods: {
    updateStats() {
      const habits = this.data.habits;
      const doneCount = habits.filter(h => h.done).length;
      const percent = Math.round((doneCount / habits.length) * 100);

      let list = habits;
      if (this.data.activeFilter === 'pending') {
        list = habits.filter(h => !h.done);
      } else if (this.data.activeFilter === 'done') {
        list = habits.filter(h => h.done);
      }

      this.setData({
        completedCount: doneCount,
        ringPercent: percent,
        filteredHabits: list
      });
    },

    toggleHabit(e) {
      const id = e.currentTarget.dataset.id;
      const list = this.data.habits.map(item => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      });

      this.setData({ habits: list }, () => {
        this.updateStats();
      });

      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });
    },

    setFilter(e) {
      const filter = e.currentTarget.dataset.filter;
      this.setData({ activeFilter: filter }, () => {
        this.updateStats();
      });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });
    }
  }
});

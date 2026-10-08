Component({
  properties: {},

  data: {
    activeMode: 'overlap', // 'overlap' | 'stagger'
    selectedId: 1,
    cards: [
      { id: 1, title: 'Autumn Calm Weekend', tag: 'Featured', date: 'Oct 12 - 15', price: '$290', bg: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' },
      { id: 2, title: 'Pine Ridge Retreat', tag: 'Popular', date: 'Nov 02 - 05', price: '$420', bg: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)' },
      { id: 3, title: 'Coastline Wanderer', tag: 'Limited', date: 'Dec 18 - 21', price: '$350', bg: 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)' }
    ]
  },

  methods: {
    setMode(e) {
      const mode = e.currentTarget.dataset.mode;
      this.setData({ activeMode: mode });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });
    },

    onCardTap(e) {
      const id = e.currentTarget.dataset.id;
      this.setData({ selectedId: id });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });
    }
  }
});

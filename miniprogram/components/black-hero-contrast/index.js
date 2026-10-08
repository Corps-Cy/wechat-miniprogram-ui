Component({
  properties: {},

  data: {
    activeCategory: '全部',
    categories: ['全部', '小说', '散文', '社科', '哲学'],
    progress: 59,
    currentBook: {
      title: '百年孤独',
      author: '加西亚·马尔克斯',
      status: '继续阅读 · 上次 12:10',
      page: 'p.212 / 360',
      percent: '59%',
      coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80'
    }
  },

  methods: {
    selectCategory(e) {
      const cat = e.currentTarget.dataset.cat;
      this.setData({ activeCategory: cat });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });
    },

    onReadContinue() {
      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });
      wx.showToast({ title: '打开《百年孤独》', icon: 'none' });
    }
  }
});

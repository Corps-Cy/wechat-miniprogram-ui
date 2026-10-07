Component({
  properties: {},

  data: {
    activeCategoryIndex: 0,
    scrollToId: 'cat-1',
    categories: [
      { id: 1, name: 'Rice', items: [{ name: 'Salmon bowl', price: '¥48' }, { name: 'Egg rice', price: '¥28' }] },
      { id: 2, name: 'Noodles', items: [{ name: 'Cold soba', price: '¥36' }, { name: 'Udon', price: '¥42' }] },
      { id: 3, name: 'Soup', items: [{ name: 'Miso soup', price: '¥16' }, { name: 'Corn soup', price: '¥22' }] },
      { id: 4, name: 'Tea', items: [{ name: 'Barley tea', price: '¥12' }, { name: 'Oolong', price: '¥18' }] },
      { id: 5, name: 'Snacks', items: [{ name: 'Rice cake', price: '¥20' }, { name: 'Sesame bar', price: '¥15' }] }
    ]
  },

  methods: {
    selectCategory(e) {
      const idx = e.currentTarget.dataset.index;
      this.setData({
        activeCategoryIndex: idx,
        scrollToId: `cat-${this.data.categories[idx].id}`
      });
      wx.vibrateShort && wx.vibrateShort({ type: 'light' });
    },

    onMenuScroll(e) {
      // 简单根据滚动高度估算联动
      const scrollTop = e.detail.scrollTop;
      const idx = Math.min(Math.floor(scrollTop / 110), this.data.categories.length - 1);
      if (idx !== this.data.activeCategoryIndex) {
        this.setData({ activeCategoryIndex: idx });
      }
    }
  }
});

Component({
  properties: {},

  data: {
    activeCategory: 'All',
    categories: ['All', 'Pop-top', 'Classic', 'Off-grid', '4x4'],
    items: [
      {
        id: 'van-1',
        title: 'DUSK POP-TOP',
        badge: 'Best seller',
        specs: '2 berth · Pop-top · 300W solar',
        solar: '300W',
        imgUrl: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'van-2',
        title: 'TIDE CRUISER',
        badge: 'Sea view',
        specs: '2 berth · Off-grid · 400W solar',
        solar: '400W',
        imgUrl: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'van-3',
        title: 'ALPINE EXPLORER',
        badge: 'Classic',
        specs: '4 berth · 4WD · All-terrain',
        solar: '500W',
        imgUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  methods: {
    selectCategory(e) {
      const cat = e.currentTarget.dataset.cat;
      this.setData({ activeCategory: cat });
      if (wx.vibrateShort) wx.vibrateShort({ type: 'light' });
    },

    onItemTap(e) {
      const id = e.currentTarget.dataset.id;
      if (wx.vibrateShort) wx.vibrateShort({ type: 'medium' });
      wx.showToast({
        title: '查看 ' + id,
        icon: 'none'
      });
    }
  }
});

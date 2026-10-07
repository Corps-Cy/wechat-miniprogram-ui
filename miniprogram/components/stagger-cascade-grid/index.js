Component({
  properties: {},

  data: {
    isEntered: false,
    photos: [
      { id: 1, name: 'Aurora Bowl', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80' },
      { id: 2, name: 'Nordkette Ridge', url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80' },
      { id: 3, name: 'Pines Line', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80' },
      { id: 4, name: 'Apex Valley', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80' }
    ]
  },

  lifetimes: {
    attached() {
      setTimeout(() => {
        this.setData({ isEntered: true });
      }, 100);
    }
  }
});

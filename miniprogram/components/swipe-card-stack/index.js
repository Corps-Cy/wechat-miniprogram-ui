Component({
  properties: {},

  data: {
    cards: [
      { id: 1, title: 'Hill cabin', sub: '4 NIGHTS', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80' },
      { id: 2, title: 'Coast route', sub: '2 NIGHTS', url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80' },
      { id: 3, title: 'Pine loop', sub: '3 NIGHTS', url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80' }
    ],
    currentIndex: 0,
    currentCard: null as any,
    nextCard: null as any
  },

  lifetimes: {
    attached() {
      this.updateCardPair();
    }
  },

  methods: {
    updateCardPair() {
      const idx = this.data.currentIndex;
      const cards = this.data.cards;
      const current = cards[idx % cards.length];
      const next = cards[(idx + 1) % cards.length];
      this.setData({
        currentCard: current,
        nextCard: next
      });
    },

    onCardSwiped() {
      wx.vibrateShort && wx.vibrateShort({ type: 'medium' });
      setTimeout(() => {
        const nextIdx = (this.data.currentIndex + 1) % this.data.cards.length;
        this.setData({ currentIndex: nextIdx });
        this.updateCardPair();
      }, 350);
    }
  }
});

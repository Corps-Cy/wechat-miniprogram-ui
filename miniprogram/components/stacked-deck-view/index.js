Component({
  properties: {
    title: {
      type: String,
      value: 'STACKED DECK / 层叠卡片牌组'
    },
    cards: {
      type: Array,
      value: [
        {
          id: 'card-1',
          tag: 'FEATURED 01',
          title: 'Spatial Audio Pro',
          subtitle: '沉浸式空间音频新定义',
          badge: 'TOP 1',
          bgGradient: 'linear-gradient(135deg, #182848 0%, #4b6cb7 100%)',
          price: '¥ 1,299'
        },
        {
          id: 'card-2',
          tag: 'FEATURED 02',
          title: 'Haptic Studio',
          subtitle: '触感原声反馈传感器',
          badge: 'NEW',
          bgGradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
          price: '¥ 899'
        },
        {
          id: 'card-3',
          tag: 'FEATURED 03',
          title: 'Monochrome Era',
          subtitle: '极简黑白高质感外壳',
          badge: 'LIMITED',
          bgGradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
          price: '¥ 1,599'
        }
      ]
    }
  },

  data: {
    currentIndex: 0,
    list: []
  },

  lifetimes: {
    attached() {
      this.setData({
        list: this.properties.cards
      });
    }
  },

  methods: {
    onDeckSwiped() {
      wx.vibrateShort({ type: 'medium' });
      setTimeout(() => {
        const { list } = this.data;
        if (list.length <= 1) return;
        const top = list[0];
        const newList = list.slice(1).concat(top);
        this.setData({ list: newList });
      }, 350);
    },

    onNextTap() {
      wx.vibrateShort({ type: 'light' });
      const { list } = this.data;
      if (list.length <= 1) return;
      const top = list[0];
      const newList = list.slice(1).concat(top);
      this.setData({ list: newList });
    }
  }
});

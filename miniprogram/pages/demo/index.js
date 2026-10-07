Page({
  data: {
    currentTab: 'popups', // 'popups' | 'motions'
    activeModal: '',
    elasticSheetVisible: false
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({ currentTab: tab });
    wx.vibrateShort && wx.vibrateShort({ type: 'light' });
  },

  openModal(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ activeModal: type });
  },

  closeModal() {
    this.setData({ activeModal: '' });
  },

  openElasticSheet() {
    this.setData({ elasticSheetVisible: true });
  },

  closeElasticSheet() {
    this.setData({ elasticSheetVisible: false });
  }
});

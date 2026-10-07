Page({
  data: {
    activeModal: '' as '' | 'frosted' | 'ring' | 'ruler' | 'photo' | 'flip' | 'drag'
  },

  openModal(e: WechatMiniprogram.CustomEvent) {
    const type = e.currentTarget.dataset.type;
    this.setData({ activeModal: type });
  },

  closeModal() {
    this.setData({ activeModal: '' });
  }
});

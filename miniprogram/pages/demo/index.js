Page({
  data: {
    activeModal: ''
  },

  openModal(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ activeModal: type });
  },

  closeModal() {
    this.setData({ activeModal: '' });
  }
});

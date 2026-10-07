Component({
  properties: {},

  data: {
    tiltX: '0.0',
    tiltY: '0.0',
    glare: 0
  },

  methods: {
    onTiltUpdate(e) {
      this.setData({
        tiltX: e.tiltX,
        tiltY: e.tiltY,
        glare: e.glare
      });
    }
  }
});

Object.defineProperty(window, 'resizeTo', {
  writable: true,
  value: jest.fn().mockImplementation(
      function resizeTo(width, height) {
        Object.assign(this, {
          innerWidth: width,
          innerHeight: height,
          outerWidth: width,
          outerHeight: height,
        }).dispatchEvent(new this.Event('resize'));
      },
  ),
});



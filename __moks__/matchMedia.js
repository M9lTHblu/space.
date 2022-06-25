Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => {
    const windowWidth = window.innerWidth;
    const queries = {
      '(max-width: 767px)': windowWidth < 767,
      '(min-width: 767px) and (max-width: 1439px)': windowWidth >= 767 && windowWidth < 1439,
      '(min-width: 1440px) and (max-width: 2559px)': windowWidth >= 1440 && windowWidth < 2559,
      '(min-width: 2560px)': windowWidth >= 2560,
    }

    return ({
      matches: queries[query],
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })
  }),
});

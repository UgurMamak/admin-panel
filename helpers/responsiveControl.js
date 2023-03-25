export const isMobile = () => window.innerWidth < 768;

export const isTalet = () =>
  window.innerWidth >= 768 && window.innerWidth < 992;

export const isDesktop = () => window.innerWidth >= 992;

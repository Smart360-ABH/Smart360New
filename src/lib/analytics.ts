
export function sendEvent(name: string, params: Record<string, any> = {}) {
  try {
    // Google Analytics 4 (gtag)
    if ((window as any).gtag) {
      (window as any).gtag('event', name, params);
    }
    // dataLayer (gtm)
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({ event: name, ...params });
    }
    // Yandex Metrika
    if ((window as any).ym && typeof (window as any).ym === 'function') {
      // ym(counterId, 'reachGoal', name, params) - but we don't have counterId here
      // If global wrapper present, call generic function
      try {
        (window as any).ym?.call(null, 'reachGoal', name, params);
      } catch (e) {
        // ignore
      }
    }
  } catch (e) {
    // no-op
  }
}

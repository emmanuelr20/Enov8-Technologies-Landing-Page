declare module "scrollreveal" {
  interface ScrollRevealOptions {
    origin?: string;
    distance?: string;
    duration?: number;
    delay?: number;
    easing?: string;
    reset?: boolean;
    scale?: number;
    opacity?: number;
    rotate?: {
      x?: number;
      y?: number;
      z?: number;
    };
    mobile?: boolean;
    desktop?: boolean;
    viewFactor?: number;
    viewOffset?: {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };
    afterReveal?: (el: HTMLElement) => void;
    beforeReveal?: (el: HTMLElement) => void;
    afterReset?: (el: HTMLElement) => void;
    beforeReset?: (el: HTMLElement) => void;
  }

  interface ScrollRevealInstance {
    reveal(
      target: string | HTMLElement | HTMLElement[],
      options?: ScrollRevealOptions
    ): ScrollRevealInstance;
    clean(target: string | HTMLElement | HTMLElement[]): ScrollRevealInstance;
    destroy(): void;
    sync(): ScrollRevealInstance;
  }

  interface ScrollRevealConstructor {
    (): ScrollRevealInstance;
    (options?: ScrollRevealOptions): ScrollRevealInstance;
  }

  const ScrollReveal: ScrollRevealConstructor & {
    default: ScrollRevealConstructor;
  };

  export = ScrollReveal;
}

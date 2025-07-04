
declare global {
  interface Window {
    AOS: {
      init: (options?: {
        duration?: number;
        easing?: string;
        once?: boolean;
        offset?: number;
      }) => void;
    };
  }
}

export {};

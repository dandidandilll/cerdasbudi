/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': {
      url: string;
      className?: string;
      style?: React.CSSProperties;
      loading?: 'lazy' | 'eager';
      [key: string]: any;
    };
  }
}
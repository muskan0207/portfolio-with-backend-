const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Remove web-vitals import to fix Vercel build
    console.log('Performance monitoring disabled for production build');
  }
};

export default reportWebVitals;

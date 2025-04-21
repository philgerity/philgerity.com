import { Workbox } from 'workbox-window';

export const registerSW = () => {
  // Skip service worker registration in StackBlitz or if not supported
  if (window.location.hostname.includes('stackblitz.io') || !('serviceWorker' in navigator)) {
    console.log('Service Worker registration skipped');
    return;
  }

  const wb = new Workbox('/sw.js');

  wb.addEventListener('installed', event => {
    if (event.isUpdate) {
      if (confirm('New content is available! Click OK to update.')) {
        window.location.reload();
      }
    }
  });

  wb.addEventListener('activated', () => {
    console.log('Service Worker activated');
  });

  wb.register().catch(error => {
    console.error('Service Worker registration failed:', error);
  });
};
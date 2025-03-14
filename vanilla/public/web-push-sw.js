self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  const { data } = event.data?.json() || {};
  const title = data.title || '';
  const options = {
    body: data.message || '',
    icon: data.photo || '/logo.png',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});

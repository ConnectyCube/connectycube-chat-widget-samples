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
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      const matchedClient = clientList.find((client) =>
        client.url.startsWith(self.location.origin) && 'focus' in client
      );

      if (matchedClient) {
        matchedClient.focus();
      } else {
        clients.openWindow('/').then((chatWidget) => {
          const payload = {
            badge: event.notification.badge || '',
            body: event.notification.body || '',
            data: event.notification.data || null,
            dir: event.notification.dir || '',
            lang: event.notification.lang || '',
            title: event.notification.title || '',
            icon: event.notification.icon || '',
            timestamp: event.notification.timestamp || Date.now(),
          };

          chatWidget?.postMessage({ action: 'connectycube-chat-widget-sw/initialNotification', payload });
        });
      }
    })
  );
});

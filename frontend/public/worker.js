/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('http://localhost:5173/serviceworker.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
*/

console.log("Service worker loaded...");

self.addEventListener('push', function(e) {
    const data = e.data.json();
    self.registration.showNotification(
        data.title,
        {
            body: data.body,
        }
    );
})


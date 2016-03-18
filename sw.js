// service worker 
console.log('inside service worker');

self.registration.showNotification('SW Title', {
    body: 'SW body'
});

// service worker 
console.log('inside service worker');

self.onnotificationclick = function(event) {
    console.log('On notification click: ', event.notification.tag);
    console.log('data: ', event.notification.data);
    if(event.notification.data.closeOnClick) {
    	event.notification.close();
    }

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function(clientList) {

		var url = '/';

        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            url = client.url;
            if(!client.focused)
            	client.focus();
        }
        if (clients.openWindow) return clients.openWindow(url);
    }));
};

/*
self.registration.showNotification('SW Title', {
    body: 'SW body'
});
*/

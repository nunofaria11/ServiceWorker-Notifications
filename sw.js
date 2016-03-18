// service worker 
console.log('inside service worker');

self.onnotificationclick = function(event) {
    var data = event.notification.data;
    var pathname = data.pathname || '/';
    //console.log('data:', event.notification.data);
    event.notification.close();
    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function(clientList) {
        console.log('clientsList:', clientList)
        var url = pathname;

        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (('focus' in client)) {
                client.focus();
                return;
            }

        }
        if (clients.openWindow) {
        	console.log('opening window ', url);
        	return clients.openWindow(url);
        }
    }));
};

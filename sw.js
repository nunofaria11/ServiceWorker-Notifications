var _LOG_TAG = 'sw.js ---- ';

console.log(_LOG_TAG + 'Handling ServiceWorker');

self.onnotificationclick = function(event) {
    var data = event.notification.data;
    var pathname = data.pathname || '/';
    
    // Closing notification on click
    event.notification.close();

    // This looks to see if the current is already open and focuses if it is
    event.waitUntil(clients.matchAll({
        type: "window"
    }).then(function(clientList) {
        console.log(_LOG_TAG + 'clientsList:', clientList)
        var url = pathname;

        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (('focus' in client)) {
                client.focus();
                return;
            }

        }
        // If no clients have been focused so far, open new window
        if (clients.openWindow) {
            console.log(_LOG_TAG + 'opening window ', url);
            return clients.openWindow(url);
        }
    }));
};

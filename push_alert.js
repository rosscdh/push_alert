Module.register("push_alert", {
    // Default module config.
    pusher_client: null,
    pusher_channel: null,

    defaults: {
        text: '-',
        pusher: {
            host: 'localhost',
            port: 8081,
            cluster: 'APP_CLUSTER',
            key: 'app_key',
            encrypted: false,
            channel: 'home',
        },
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.text;
        return wrapper;
    },

    getScripts: function() {
        return [
            'https://cdnjs.cloudflare.com/ajax/libs/pusher/4.2.1/pusher.min.js',  // this file will be loaded from the jquery servers.
        ]
    },

    start: function() {
        var self = this;

        this.pusher_client = new Pusher(this.config.pusher.key, {
            cluster: this.config.pusher.cluster,
            wsHost: this.config.pusher.host,
            wsPort: this.config.pusher.port,
            enabledTransports: ["ws", "flash"],
            disabledTransports: ["flash"]
        });

        this.pusher_channel = this.pusher_client.subscribe(this.config.pusher.channel);

        this.pusher_channel.bind('new-message', function ( data ) {
            data['type'] = ('type' in data) ? data['type'] : 'notification' ;// set alert notidication tpe

            self.sendNotification('SHOW_ALERT', data);

            self.config.text = data['message'];

            self.updateDom();
        });

        this.pusher_channel.bind('new-feeds', function ( data ) {

            self.sendNotification('SHOW_ALERT', {'message': data.message, 'type': 'notification'});
            self.sendNotification('FRESH_LOAD_FEEDS', data);

        });

        this.pusher_channel.bind('new-compliment', function ( data ) {

            self.sendNotification('UPDATE_COMPLIMENT', {'compliment': data.message});

        });
        

    }
});
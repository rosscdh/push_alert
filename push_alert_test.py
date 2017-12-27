from pusher import Pusher

pusher = Pusher(
    app_id=u'app_id',
    key=u'app_key',
    secret=u'secret',
    cluster=u'APP_CLUSTER',
    host=u'localhost',
    port=8081,
    ssl=False
)

# pusher.trigger(channels=u'home',
#                event_name=u'new-message',
#                data={u'message': u'Awesome', 'type': 'alert', 'timer': 3000})
pusher.trigger(channels=u'home',
               event_name=u'new-message',
               data={u'message': u'Message Awesome', 'type': 'notification', 'timer': 3000})
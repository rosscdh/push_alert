import os
from pusher import Pusher

pusher = Pusher(
    app_id=u'app_id',
    key=u'app_key',
    secret=u'secret',
    cluster=u'APP_CLUSTER',
    host=u'192.168.0.117',
    port=8081,
    ssl=False
)

# pusher.trigger(channels=u'home',
#                event_name=u'new-message',
#                data={u'message': u'Awesome', 'type': 'alert', 'timer': 3000})
# pusher.trigger(channels=u'home',
#                event_name=u'new-message',
#                data={u'message': u'Sucked In', 'type': 'notification', 'timer': 3000})

pusher.trigger(channels=u'home',
               event_name=u'new-feeds',
               data={u'message': u'Loaded new feeds', 'feeds': [{'title': "Reddit Consipiracy", 'url': "https://www.reddit.com/r/conspiracy/.rss"}], 'timer': 3000})

# pusher.trigger(channels=u'home',
#                event_name=u'new-compliment',
#                data={u'message': u'Balls Out Obama'})

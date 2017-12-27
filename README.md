# push_alert

MagicMirror module for pusher integration, uses the default alert functionality

### installing

add to your config.js

```
        {
            module: "push_alert",
            position: "top_center",
            config: {
                text: '-',  # default text
                pusher: {
                    cluster: 'APP_CLUSTER',
                    key: 'app_key',
                    encrypted: true,
                    channel: 'home',  # whatever you would like to call it
                },
            }
        },
```


## pusher emulator

```
docker-compose up
```

then configure and call

```
python push_alert_test.py
```
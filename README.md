# bunyan-dev-friendly [![dependencies Status](https://david-dm.org/MayasHaddad/bunyan-dev-friendly/status.svg)](https://david-dm.org/MayasHaddad/bunyan-dev-friendly)

Switch off bunyan logging when NODE_ENV=development

## Example

log.js:
```js
var logger = require('bunyan-dev-friendly')
var log = logger(
  // bunyan.createLogger params
  {
    name: 'logger',
    streams: [
      {
        type: 'rotating-file',
          path: 'log-file.log',
          period: '1d',
          count: 3
      }
    ]
  }
)

...
log('hello world')
```

## Now

```console
$> NODE_ENV=development node log.js
```
results in console
```console
hello world
````

and...


```console
$> NODE_ENV=other node log.js
```
results in log-file.log:
```
{"name":"logger","hostname":"yourhost","pid":20111,"level":50,"msg":"hello world","time":"2016-10-23T21:03:05.918Z","v":0}
````

const bunyan = require('bunyan')

module.exports = (bunyanLoggerOptions) => {
  if(process.env.NODE_ENV === 'production') return bunyan.createLogger(bunyanLoggerOptions)
  return {
    error: (err) => { console.log(err) },
    info: (info) => { console.log(info) },
    warn: (w) => { console.log(warn) }
  }
}

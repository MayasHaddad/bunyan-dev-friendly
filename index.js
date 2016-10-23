const bunyan = require('bunyan')

module.exports = (bunyanLoggerOptions) => {
  if(process.env.NODE_ENV === 'development') {
    return {
      error: (err) => { console.log(err) },
      info: (info) => { console.log(info) },
      warn: (w) => { console.log(warn) }
    }
  }
  return bunyan.createLogger(bunyanLoggerOptions)
}

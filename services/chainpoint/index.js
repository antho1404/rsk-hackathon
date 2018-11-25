const MESG = require('mesg-js').service()

MESG.listenTask({
  submit: require('./tasks/submit')
})

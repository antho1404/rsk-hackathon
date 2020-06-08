const MESG = new (require('@liteflow/service'))()

MESG.listenTask({
  submit: require('./tasks/submit')
})

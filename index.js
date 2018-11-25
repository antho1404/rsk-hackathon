const MESG = require('mesg-js').application()
const events = require('./events')

MESG.whenEvent(events.bitcoinTransaction, task.callContract)
MESG.whenResult(events.contractCalled, tasks.submitResult)

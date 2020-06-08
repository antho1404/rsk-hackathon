const MESG = require('@liteflow/service').application()
const events = require('./events')
const tasks = require('./tasks')

MESG.whenEvent(events.bitcoinTransaction, tasks.callContract)
MESG.whenResult(events.contractCalled, tasks.submitResult)

MESG.whenEvent(events.transaction, tasks.decodeLog)
MESG.whenResult(events.logDecodded, tasks.send)
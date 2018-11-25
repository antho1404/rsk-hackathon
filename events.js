const bitcoinTransaction = {
  serviceID: process.env.BTC_SERVICE,
  eventKey: 'transaction',
  filter: (eventKey, eventData) => eventData.to === process.env.BTC_ADDRESS
}

const contractCalled = {
  serviceID: process.env.EVM_SERVICE,
  taskKey: 'executeSmartContractMethod',
  outputKey: 'success',
  filter: (outputKey, outputData, taskKey, tags) => tags.indexOf('call_contract') >= 0
}

module.exports = {
  bitcoinTransaction,
  contractCalled
}
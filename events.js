const bitcoinTransaction = {
  serviceID: process.env.BTC_SERVICE,
  eventKey: 'transaction',
  filter: (eventKey, eventData) => {
    console.log('transaction on btc', eventData.to === process.env.BTC_SMART_CONTRACT_ADDRESS, eventData.to, process.env.BTC_SMART_CONTRACT_ADDRESS)
    return eventData.to === process.env.BTC_SMART_CONTRACT_ADDRESS
  }
}

const contractCalled = {
  serviceID: process.env.EVM_SERVICE,
  taskKey: 'executeSmartContractMethod',
  filter: (outputKey, outputData, taskKey, tags) => {
    console.log('smart contract called', outputKey, outputData)
    return true //tags.indexOf('call_contract') >= 0
  }
}

const transaction = {
  serviceID: process.env.EVM_SERVICE,
  eventKey: 'log',
  filter: (eventKey, eventData) => {
    return eventData.address.toLowerCase() === process.env.SMART_CONTRACT_ADDRESS.toLowerCase()
  }
}

const logDecodded = {
  serviceID: process.env.EVM_SERVICE,
  taskKey: 'decodeLog',
  outputKey: 'success',
  filter: (key, data) => {
    console.log('smart contract decoded', outputData)
    return true
  }
}

module.exports = {
  bitcoinTransaction,
  contractCalled,
  transaction,
  logDecodded
}
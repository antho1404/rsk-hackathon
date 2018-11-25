const utils = require('./utils')

const callContract = {
  serviceID: process.env.EVM_SERVICE,
  taskKey: 'executeSmartContractMethod',
  inputs: (eventKey, eventData) => ({
    contractAddress: process.env.SMART_CONTRACT_ADDRESS,
    inputs: {
      foo: 1,
      bar: true
    },
    methodAbi: require('./abi.json').filter(x => x.type === 'function' && x.name === 'test')[0],
    privateKey: process.env.PRIVATE_KEY
  }),
  tags: (eventKey, eventData) => [
    `call_contract`,
    utils.setTagValue('contract', process.env.SMART_CONTRACT_ADDRESS),
    utils.setTagValue('transactionHash', eventData.transactionHash),
    utils.setTagValue('blockHash', eventData.blockHash)
  ]
}

const submitResult = {
  serviceID: process.env.CHAINPOINT_SERVICE,
  taskKey: 'submit',
  inputs: (outputKey, outputData, taskKey, tags) => ({
    data: {
      evmTxHash: outputData.transactionHash,
      btcTxHash: utils.getTagValue(tags, 'transactionHash'),
    }
  })
}

module.exports = {
  callContract,
  submitResult
}
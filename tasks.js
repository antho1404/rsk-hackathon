const utils = require('./utils')

const callContract = {
  serviceID: process.env.EVM_SERVICE,
  taskKey: 'executeSmartContractMethod',
  inputs: (eventKey, eventData) => ({
    contractAddress: process.env.SMART_CONTRACT_ADDRESS,
    inputs: {
      btcvalue: eventData.value,
      addr1: "mzvsCfpRQiH46w4ncA4JznuQF5bZamUYKE",
      addr2: "mmD7z1kuUGh4AJoyavUEQjkhheaXSUexds"
    },
    gasLimit: 300000,
    gasPrice: "1000000000",
    value: "0",
    methodAbi: require('./smartcontract/abi.json').filter(x => x.type === 'function' && x.name === 'test')[0],
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

const decodeLog = {
  serviceID: process.env.EVM_SERVICE,
  taskKey: 'decodeLog',
  inputs: (key, data) => ({
    ...data,
    abi: require('./smartcontract/abi.json').filter(x => x.type === 'function' && x.name === 'test')[0]
  })
}

const send = {
  serviceID: process.env.BTC_SERVICE,
  taskKey: 'send',
  inputs: (outputKey, outputData, taskKey, tags) => ({
    to: outputData.to,
    value: outputData.value.toString(),
    privateKey: process.env.BTC_PRIVATE_KEY
  })
}

module.exports = {
  callContract,
  submitResult,
  decodeLog,
  send
}
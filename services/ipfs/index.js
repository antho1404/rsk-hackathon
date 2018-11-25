const ipfsAPI = require('ipfs-api')

const ipfs = ipfsAPI({
  host: 'ipfs',
  port: '5001',
  protocol: 'http'
})

ipfs.pubsub.subscribe('test', msg => console.log('subscribe', msg), err => {
  if (err) console.error(err)
})
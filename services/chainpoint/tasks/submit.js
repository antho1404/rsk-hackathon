const cp = require('chainpoint-client')
const SHA256 = require("crypto-js/sha256")

module.exports = async ({ data }, { success, error }) => {
  try {
    const str = JSON.stringify(data)
    const hashes = [SHA256(str).toString()]
    const proofHandles = await cp.submitHashes(hashes)
    const { hash, hashIdNode } = proofHandles[0]
    return success({
      hashIdNode,
      hash
    })
  } catch(e) {
    return error({ error: e.toString() })
  }
}

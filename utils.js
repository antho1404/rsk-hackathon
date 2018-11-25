const getTagValue = (tags, key) => {
  const r = new RegExp(`^data:${key}:(.*)`)
  return tags
    .filter(x => r.test(x))
    .map(x => r.exec(x)[1])[0]
}

const setTagValue = (key, value) => `data:${key}:${value}`

module.exports = {
  getTagValue,
  setTagValue
}
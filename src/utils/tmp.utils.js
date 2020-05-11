const fs = require('fs')
const { TMP_PATH } = require('../constants')

function writeTmpFile(name, content) {
  fs.writeFileSync(`${TMP_PATH}/${name}`, content)
}

function loadTmpFile(name) {
  try {
    return fs.readFileSync(`${TMP_PATH}/${name}`, 'utf8')
  } catch (e) {
    console.error(e)
    return null
  }
}

module.exports = {
  writeTmpFile,
  loadTmpFile,
}

const fs = require('fs')
const { TMP_PATH } = require('../constants')

function writeTmpFile(name, content) {
  fs.writeFileSync(`${TMP_PATH}/${name}`, content)
}

function loadTmpFile(name) {
  return fs.readFileSync(`${TMP_PATH}/${name}`, 'utf8')
}

module.exports = {
  writeTmpFile,
  loadTmpFile,
}

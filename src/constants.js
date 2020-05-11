const TMP_PATH = 'tmp'

const UAS = {
  CHROME: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
  FIREFOX: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0',
  EDGE: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393'
}

// http://screensiz.es/
const VIEWPORTS = {
  ACER_CHROMEBOOK: {
    width: 1366,
    height: 768
  },
}
module.exports = {
  UAS,
  VIEWPORTS,
  TMP_PATH
}

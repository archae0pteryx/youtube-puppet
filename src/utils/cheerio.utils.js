const cheerio = require('cheerio')

function createSetByFilter(arr, str) {
  const elems = arr.filter(item => item && item.includes(str))
  return Array.from(new Set(elems))
}

async function extractLinks (content) {
  try {
    const $ = cheerio.load(content)
    const allHref = []

    $($('a')).each((i, link) => {
      allHref.push($(link).attr('href'))
    })

    const watch = createSetByFilter(allHref, '/watch?v')
    const user = createSetByFilter(allHref, '/user/')
    return {
      watch,
      user,
      error: null
    }
  } catch (error) {
    return {
      watch: null,
      user: null,
      error
    }
  }
}

function formatWatchData(data) {
  const {
    title = null,
    viewCount = null,
    uploadDate = null,
    uploadBy = null,
    error = null
  } = data
  return {
    title,
    viewCount,
    uploadDate,
    uploadBy,
    error
  }
}
// title: $('#info-contents').find('h1').text()
// views: $('#info-contents').find('#count').text() //"6,009,760 views6M views"
// date: $('#info-contents').find('#date').text()
// likes/dis: $('#top-level-buttons').find('#text').text() // "124K3.3KShareSave"
async function extractFromWatchPage(content) {
  try {
    const $ = cheerio.load(content)
    debugger
    return formatWatchData({})
  } catch (error) {
    return formatWatchData({ error })
  }
}

module.exports = {
  extractLinks,
  extractFromWatchPage
}


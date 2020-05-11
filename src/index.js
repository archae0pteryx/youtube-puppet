require('dotenv').config()

const puppeteer = require('puppeteer')
const { selectRandomFromObject, extractLinks, loadTmpFile, writeTmpFile, extractFromWatchPage } = require('./utils')
const { UAS, VIEWPORTS } = require('./constants')
const { BASE_URL } = process.env

async function createBrowser() {
  return puppeteer.launch()
}

async function createPage(browser) {
  const page = await browser.newPage()
  // await page.setUserAgent(selectRandomFromObject(UAS))
  // await page.setViewport(selectRandomFromObject(VIEWPORTS))
  return page
}

async function getPageContent (page) {
  return page.content()
}

async function loadPage (page, url = BASE_URL) {
  try {
    return page.goto(url)
  } catch (e) {
    console.error(e)
  }
}

async function launch () {
  // const browser = await createBrowser()
  // const page = await createPage(browser)
  // await loadPage(page)
  // const content = await getPageContent(page)
  // const content = await loadTmpFile('originalPageContent.html')
  // const linkMap = await extractLinks(content)
  // console.log({ linkMap })
  // const nextPage = `${BASE_URL}${linkMap.watch[0]}`
  // await loadPage(page, 'https://www.youtube.com/watch?v=JMG1Nl7uWko')
  // const content = await getPageContent(page)
  // writeTmpFile('watchPage.html', content)
  // await page.screenshot({ path: 'before.png'})
  const content = await loadTmpFile('watchPage.html')
  const res = await extractFromWatchPage(content)
  console.log({ res })
  // await browser.close()
}

launch()

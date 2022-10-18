const puppeteer = require("puppeteer");

async function scrapeWeb(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(`//*[@id="mw-content-text"]/div[1]/p[2]`);
  const txt = await el.getProperty("textContent");
  const rawTxt = await txt.jsonValue();

  console.log({ rawTxt });

  browser.close();
}

scrapeWeb(`https://en.wikipedia.org/wiki/Nigeria`);

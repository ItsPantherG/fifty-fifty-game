const puppeteer = require("puppeteer");

async function scrapeWeb(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(`//*[@id="mw-content-text"]/div[1]/p[2]`);
  const txt = await el.getProperty("textContent");
  const rawTxt = await txt.jsonValue();

  let populationTemp = rawTxt.replaceAll(",", "").split(" ");
  const index = populationTemp.indexOf("million");
  let population = populationTemp.at(index - 1);
  population += ` ${populationTemp.at(index)}`;

  console.log(population);

  browser.close();
}

export default scrapeWeb;

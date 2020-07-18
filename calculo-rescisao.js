const puppeteer = require('puppeteer-firefox');
const parseArguments = require('./parseArguments');
const calculateTermination = require('./calculateTermination');

const main = async () => {
  const args = parseArguments();

  const browser = await puppeteer.launch({
    headless: process.env.HEADLESS !== '0',
  });

  const page = await browser.newPage();
  await page.setRequestInterception(true);

  page.on('request', (request) => {
    const blocked = [
      'image',
      'stylesheet',
      'font',
      'script',
    ].includes(
      request.resourceType(),
    );

    if (blocked) {
      request.abort();
    } else {
      request.continue();
    }
  });

  try {
    await calculateTermination(page, args);
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  }
};

main();

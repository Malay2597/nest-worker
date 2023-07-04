const puppeteer = require('puppeteer');

const getPdf = async (htmlCode) => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({ width: 1980, height: 1024 });

  // Set Content
  await page.setContent(htmlCode, { waitUntil: 'load' });

  //Generate PDF
  const pdfBuffer = await page.pdf({
    printBackground: true,
    height: 710,
    width: 1055,
  });
  console.log('Output inside Pdf Generator module : ', pdfBuffer);
  await browser.close();
  return pdfBuffer;
};

export default getPdf;

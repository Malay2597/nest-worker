const { workerData, parentPort } = require('worker_threads');
// const puppeteer = require('puppeteer');
// var pdf = require('./pdfGenerator');
import getPdf from "./pdfGenerator";

(async() => {
  let pdfBuffer = await getPdf(workerData);
  console.log('Output 2', pdfBuffer);
  parentPort.postMessage(pdfBuffer);
})();

// const getPdf = async () => {
//   console.log('Inputt:', workerData);
//   const browser = await puppeteer.launch({ headless: 'new' });
//   const page = await browser.newPage();

//   // Set screen size
//   await page.setViewport({ width: 1980, height: 1024 });

//   // Set Content
//   await page.setContent(workerData, { waitUntil: 'load' });

//   //Generate PDF
//   const pdfBuffer = await page.pdf({
//     printBackground: true,
//     height: 710,
//     width: 1055,
//   });
//   console.log('Output 1', pdfBuffer);
//   await browser.close();
//   return pdfBuffer;
// };

// getPdf().then(data => {
//     buffer = data;
//     for(let i=0; i<= 1000000000; i++)
//     {
//         if(i == 1000000000) console.log('End');

//     }
//     console.log('Output 2', buffer);
//     parentPort.postMessage(buffer);
// });

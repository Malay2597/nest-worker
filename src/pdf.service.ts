import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';


@Injectable()
export class PdfService {

  getPdf = async (htmlCode: string) => {
    // console.log(htmlCode);
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();

    // Set screen size
    await page.setViewport({ width: 1980, height: 1024 });

    // Set Content
    await page.setContent(htmlCode, { waitUntil: 'load' });

    // await page.addStyleTag({
    //   content: `
    //     html {
    //       -webkit-print-color-adjust: exact !important;
    //       -webkit-filter: opacity(1) !important;
    //     }
    //   `
    // });

    //Generate PDF
    const pdfBuffer = await page.pdf({printBackground: true, height:710, width: 1055 });
    await browser.close();
    for(let i=0; i<= 1000000000 ; i++)
    {
        if(i == 1000000000) console.log('End');

    }
    return pdfBuffer;
  };
}


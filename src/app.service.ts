import { Injectable } from '@nestjs/common';
import Handlebars from 'handlebars';
import { PdfService } from './pdf.service';
import { RequestCreatedEvent } from './requests/events/request-created.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  constructor() {}
  getHello(): string {
    return 'Hello World!';
  }

  getViewName(): string {
    return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>LL</title>
      </head>
      <body style="background-image: url('https://cdn11.bigcommerce.com/s-pp2njniwyn/images/stencil/original/image-manager/swell-bottles-b.jpg?t=1676567436'); background-size: 1055px 710px ; background-repeat: repeat-y;">

      <title></title>
      
      <h2>MasterClass Five Piece Measuring Set</h2>
      
      <table border="0" cellpadding="0" cellspacing="0" style="width:500px;">
      
          <tbody>
              <tr>
                  <td style="width: 368px;">This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees.</td>
                  <td style="width: 126px;"><img alt="" src="https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg" style="width: 100px; height: 212px;" /></td>
                  <td style="width: 368px;">This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees.</td>
                  <td style="width: 126px;"><img alt="" src="https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg" style="width: 100px; height: 212px;" /></td>
              </tr>
              <tr style="page-break-before: always ;">
                <td style="width: 368px;">This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees.</td>
                <td style="width: 126px;"><img alt="" src="https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg" style="width: 100px; height: 212px;" /></td>
                <td style="width: 368px;">This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees.</td>
                <td style="width: 126px;"><img alt="" src="https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg" style="width: 100px; height: 212px;" /></td>
            </tr>
            <tr style="page-break-before: always;">
                <td style="width: 368px;">This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees.</td>
                <td style="width: 126px;"><img alt="" src="https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg" style="width: 100px; height: 212px;" /></td>
                <td style="width: 368px;">This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees.</td>
                <td style="width: 126px;"><img alt="" src="https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg" style="width: 100px; height: 212px;" /></td>
            </tr>
            <tr style="page-break-before: always;">
                <td style="width: 368px;">This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees.</td>
                <td style="width: 126px;"><img alt="" src="https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg" style="width: 100px; height: 212px;" /></td>
                <td style="width: 368px;">This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees.</td>
                <td style="width: 126px;"><img alt="" src="https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg" style="width: 100px; height: 212px;" /></td>
            </tr>
          </tbody>
      </table>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p style="font-size:10px;"><a href="#">HTML Code</a></p>
      </body>
    </html>`
  }

  getTemplate(): string {
    let template = Handlebars.compile(this.getViewName());

    let mapperObject = {
      productTitle: 'MasterClass Five Piece Measuring Set',
      imageUrl:
        'https://m.media-amazon.com/images/I/71aobX5+3LL._AC_SL1500_.jpg',
      productDescription:
        'This striking set features five essential sized and shaped kitchen knives in a unique matt brass coloured coating. Beautifully contrasting with the black wooden storage block with inset brass coloured base, each knife is made from high quality stainless steel with a taper ground cutting edge for superior cutting performance. The knives also have flared bolsters and have been weighted and balanced for easy and comfortable cutting. All knives have twenty-five year guarantees',
    };

    return template(mapperObject);
  }

  // async handleRequestEvent(params) {
  //   const requestCreatedEvent = new RequestCreatedEvent();
  //   let counter = 0;
  //   let htmlBody = this.getTemplate();
  //   // let output = await this.pdfService.getPdf(htmlBody);
  //   console.log('ARRAY BUFFER:', output);
  //   for(let i=0; i < 20_000_000_000; i++){
  //     counter++;
  //   }
  //   //Other DB transaction

  //   requestCreatedEvent.name = params.name;
  //   requestCreatedEvent.description = 'Any description';
  //   requestCreatedEvent.buffer = output;
  //   this.eventEmitter.emit('Request.created', requestCreatedEvent);
  // }
}

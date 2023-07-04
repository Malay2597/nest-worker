import { Get, Controller, Res, Render, Req, Sse } from '@nestjs/common';
import { Response, response } from 'express';
import { AppService } from './app.service';
import { PdfService } from './pdf.service';
import Handlebars from 'handlebars';
import { Worker } from 'worker_threads';
import { RequestCreatedEvent } from './requests/events/request-created.event';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable, interval, map } from 'rxjs';
// var pdf = require('../src/pdfGenerator');
import getPdf from './pdfGenerator';

var id = 1;
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pdfService: PdfService,
    private eventEmitter: EventEmitter2,
  ) {}
  @Get('/home')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  // root(@Res() res: Response) {
  getTemplate(): string {
    return this.appService.getTemplate();
  }

  @Get('/blocking')
  async getRes(@Res() response: Response) {
    // let counter = 0;
    // for(let i=0; i < 20_000_000_000; i++){
    //   counter++;
    // }
    // return counter;
    let inputData = this.getTemplate();

    const worker = new Worker('./src/worker.ts', { workerData: inputData });
    console.log('New Worker created', worker);

    worker.on('message', (data) => {
      console.log('Received', data);
      // database flags
      
    });

    worker.on('error', (err) => {
      console.log('ERROR:', err);
      return err;
    });

    return response.send({ message: 'Your request is processed' });
  }

  @Get('/pdf')
  async getPdf(@Res() response: Response) {
    

    let output = await getPdf(this.getTemplate());

    response.contentType('application/pdf');
    response.set('Content-Disposition', `attachment; filename="abc.pdf"`);
    response.end(Buffer.from(output));
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((_) => ({ data: { hello: 'world' } } as MessageEvent)),
    );
  }
}

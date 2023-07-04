import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { RequestCreatedEvent } from '../events/request-created.event';

@Injectable()
export class RequestCreatedListener {
  @OnEvent('Request.created')
  handleOrderCreatedEvent(event: RequestCreatedEvent) {
    // handle and process "RequestCreated" event
    console.log('Event for creating pdf captured : ', event);
  }
}
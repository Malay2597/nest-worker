import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Request } from '../requests/entities/request.entity';
import { CreateRequestDto } from '../requests/dto/create-request.dto';
import { RequestCreatedEvent } from '../requests/events/request-created.event';

@Injectable()
export class RequestService {
  public orders: Request[] = [
    {
      id: 1,
      name: 'Order #1',
      description: 'Description order #1',
    },
    {
      id: 2,
      name: 'Order #2',
      description: 'Description order #2',
    },
  ];

  constructor(private eventEmitter: EventEmitter2) {}

  create(createOrderDto: CreateRequestDto) {
    const order = {
      id: this.orders.length + 1,
      ...createOrderDto,
    };
    this.orders.push(order);

    const orderCreatedEvent = new RequestCreatedEvent();
    orderCreatedEvent.name = order.name;
    orderCreatedEvent.description = order.description;
    orderCreatedEvent.buffer = order.buffer;
    this.eventEmitter.emit('order.created', orderCreatedEvent);

    return order;
  }
}
import { Body, Controller, Post } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { RequestService } from './requests.service';

@Controller('orders')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }
}
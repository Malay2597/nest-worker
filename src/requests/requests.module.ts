import { Module } from '@nestjs/common';
import { RequestCreatedListener } from './listeners/request-created.listener'
import { RequestController } from './requests.controller';
import { RequestService } from './requests.service';

@Module({
  controllers: [RequestController],
  providers: [RequestService, RequestCreatedListener],
})
export class RequestModules {}
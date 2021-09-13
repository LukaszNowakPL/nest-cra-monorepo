import { Module } from '@nestjs/common';
import { PaxServicesService } from './pax-services.service';
import { PaxServicesController } from './pax-services.controller';

@Module({
  providers: [PaxServicesService],
  controllers: [PaxServicesController],
})
export class PaxServicesModule {}

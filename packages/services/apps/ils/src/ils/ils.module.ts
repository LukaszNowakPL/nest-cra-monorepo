import { Module } from '@nestjs/common';
import { IlsService } from './ils.service';
import { IlsController } from './ils.controller';

@Module({
  providers: [IlsService],
  controllers: [IlsController],
})
export class IlsModule {}

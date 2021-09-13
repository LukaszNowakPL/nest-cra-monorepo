import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';

@Module({
  providers: [AirportsService],
  controllers: [AirportsController],
})
export class AirportsModule {}

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';

@Module({
  imports: [HttpModule],
  providers: [AirportsService],
  controllers: [AirportsController],
})
export class AirportsModule {}

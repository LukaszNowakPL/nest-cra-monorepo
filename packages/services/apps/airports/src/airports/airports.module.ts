import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [AirportsService],
  controllers: [AirportsController],
})
export class AirportsModule {}

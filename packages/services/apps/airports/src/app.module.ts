import { Module } from '@nestjs/common';
import { AirportsModule } from './airports/airports.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [AirportsModule, ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AirportsModule } from './airports/airports.module';

@Module({
  imports: [AirportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

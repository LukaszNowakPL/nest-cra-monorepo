import { Module } from '@nestjs/common';
import { PaxServicesModule } from './pax-services/pax-services.module';

@Module({
  imports: [PaxServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

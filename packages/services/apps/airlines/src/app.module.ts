import { Module } from '@nestjs/common';
import { AirlinesModule } from './airlines/airlines.module';

@Module({
  imports: [AirlinesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

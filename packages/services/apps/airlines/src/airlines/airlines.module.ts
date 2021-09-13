import { Module } from '@nestjs/common';
import { AirlinesService } from './airlines.service';
import { AirlinesController } from './airlines.controller';

@Module({
  providers: [AirlinesService],
  controllers: [AirlinesController],
})
export class AirlinesModule {}

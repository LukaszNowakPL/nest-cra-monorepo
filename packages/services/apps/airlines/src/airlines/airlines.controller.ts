import { Controller, Get } from '@nestjs/common';
import { AirlinesService } from './airlines.service';
import { AirlineDto } from './airlines.types';

@Controller('api/airlines')
export class AirlinesController {
  constructor(private readonly airlinesService: AirlinesService) {}

  @Get()
  async index(): Promise<AirlineDto[]> {
    return this.airlinesService.findAll();
  }
}

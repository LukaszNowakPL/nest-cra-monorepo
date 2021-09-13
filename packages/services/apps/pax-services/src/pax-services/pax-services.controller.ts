import { Controller, Get } from '@nestjs/common';
import { PaxServicesService } from './pax-services.service';
import { PaxServiceDto } from './pax-services.types';

@Controller('api/pax-services')
export class PaxServicesController {
  constructor(private readonly paxServicesService: PaxServicesService) {}

  @Get()
  async index(): Promise<PaxServiceDto[]> {
    return this.paxServicesService.findAll();
  }
}

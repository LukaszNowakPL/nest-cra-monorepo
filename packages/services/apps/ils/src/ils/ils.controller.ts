import { Controller, Get } from '@nestjs/common';
import { IlsService } from './ils.service';
import { IlsDto } from './ils.types';

@Controller('api/ils')
export class IlsController {
  constructor(private readonly ilsService: IlsService) {}

  @Get()
  async index(): Promise<IlsDto[]> {
    return this.ilsService.findAll();
  }
}

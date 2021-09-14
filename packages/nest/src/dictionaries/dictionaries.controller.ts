import { Controller, Get } from '@nestjs/common';
import { DictionariesService } from './dictionaries.service';
import { DictionariesDto } from '@nest-cra-monorepo/types';

@Controller('api/dictionaries')
export class DictionariesController {
  constructor(private readonly dictionariesService: DictionariesService) {}

  @Get()
  async index(): Promise<DictionariesDto> {
    return this.dictionariesService.getAll();
  }
}

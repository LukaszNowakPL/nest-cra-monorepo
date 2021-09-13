import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountryDto } from './countries.types';

@Controller('api/countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async index(): Promise<CountryDto[]> {
    return this.countriesService.findAll();
  }

  /*@Get(':id')
  async find(@Param('id') id: string): Promise<Country> {
    return this.countriesService.find(id);
  }*/
}

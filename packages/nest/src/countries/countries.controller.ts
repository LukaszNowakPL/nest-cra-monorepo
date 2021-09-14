import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountryAirportDto } from '@nest-cra-monorepo/types';
import { getMappedAirports } from './countries.helpers';
import {AirportDto} from "../services/airports.types";

@Controller('api/countries/:id/airports')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async index(@Param('id') id: number): Promise<CountryAirportDto[]> {
    const airports = await this.countriesService
      .findAirportsByCountry(id)
      .toPromise();
    return getMappedAirports((airports as unknown) as AirportDto[]);
  }
}

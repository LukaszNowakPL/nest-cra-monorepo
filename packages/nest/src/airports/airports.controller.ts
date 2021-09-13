import { Body, Controller, Post } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportForm } from '@nest-cra-monorepo/types';

@Controller('api/airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Post()
  async create(@Body() airportForm: AirportForm) {
    return this.airportsService.createAirport(airportForm);
  }
}

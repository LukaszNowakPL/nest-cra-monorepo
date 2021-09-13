import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportDto, AirportForm } from './airports.types';

@Controller('api/airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Get()
  async findAll(): Promise<AirportDto[]> {
    return this.airportsService.findAll();
  }

  @Get('/country/:id')
  async findByCountry(@Param('id') id: string): Promise<AirportDto[]> {
    return this.airportsService.findByCountry(Number(id));
  }

  @Post()
  create(@Body() airportForm: AirportForm): void {
    this.airportsService.create(airportForm);
  }
}

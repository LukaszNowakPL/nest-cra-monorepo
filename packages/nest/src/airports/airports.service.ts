import { Injectable } from '@nestjs/common';
import { AirportForm } from '@nest-cra-monorepo/types';
import {AirportsService as AirportsServiceService} from "../services/airports.service";

@Injectable()
export class AirportsService {
  constructor(
      private airportsService: AirportsServiceService,
  ) {}

  async createAirport(airportForm: AirportForm) {
    try {
      await this.airportsService.post(airportForm).toPromise();
    } catch(e) {
        throw new Error('Adding airport error');
    }
  }
}

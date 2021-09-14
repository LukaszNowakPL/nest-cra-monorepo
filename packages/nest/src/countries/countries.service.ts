import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import {AirportsService} from "../services/airports.service";
import {AirportDto} from '../services/airports.types';

@Injectable()
export class CountriesService {
  constructor(
      private airportsService: AirportsService,
  ) {}

  findAirportsByCountry(id: number): Observable<AxiosResponse<AirportDto[]>> {
    return this.airportsService.findAirportsByCountry(id)
  }
}

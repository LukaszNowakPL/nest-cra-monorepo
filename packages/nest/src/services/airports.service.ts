import {Inject, Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import {AirportDto} from './airports.types';

@Injectable()
export class AirportsService {
  constructor(
      private httpService: HttpService,
      @Inject('airportsServiceBaseUrl') private baseUrl: string,
  ) {}

    findAirportsByCountry(id: number): Observable<AxiosResponse<AirportDto[]>> {
        return this.httpService
            .get(`${this.baseUrl}/airports/country/${id}`)
            .pipe(map(response => response.data));
    }
}

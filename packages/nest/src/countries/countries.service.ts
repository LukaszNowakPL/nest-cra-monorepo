import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { AirportDto } from './countries.types';

@Injectable()
export class CountriesService {
  constructor(private httpService: HttpService) {}

  findAirportsByCountry(id: number): Observable<AxiosResponse<AirportDto[]>> {
    return this.httpService
      .get(`/airports/country/${id}`)
      .pipe(map(response => response.data));
  }
}

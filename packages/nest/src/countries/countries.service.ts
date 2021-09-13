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
    // @ToDo: ustawić porty i localhost w jakieś env
    return this.httpService
      .get(`http://localhost:13000/api/airports/country/${id}`)
      .pipe(map(response => response.data));
  }
}

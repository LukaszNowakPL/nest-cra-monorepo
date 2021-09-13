import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import {
  AirlineDto,
  CountryDto,
  IlsDto,
  PaxServiceDto,
} from './dictionaries.types';

@Injectable()
export class DictionariesService {
  constructor(private httpService: HttpService) {}

  getCountries(): Observable<AxiosResponse<CountryDto[]>> {
    // @ToDo: ustawić porty i localhost w jakieś env
    return this.httpService
      .get('http://localhost:12000/api/countries')
      .pipe(map(response => response.data));
  }

  getAirlines(): Observable<AxiosResponse<AirlineDto[]>> {
    // @ToDo: ustawić porty i localhost w jakieś env
    return this.httpService
      .get('http://localhost:11000/api/airlines')
      .pipe(map(response => response.data));
  }

  getIls(): Observable<AxiosResponse<IlsDto[]>> {
    // @ToDo: ustawić porty i localhost w jakieś env
    return this.httpService
      .get('http://localhost:14000/api/ils')
      .pipe(map(response => response.data));
  }

  getPaxServices(): Observable<AxiosResponse<PaxServiceDto[]>> {
    // @ToDo: ustawić porty i localhost w jakieś env
    return this.httpService
      .get('http://localhost:15000/api/pax-services')
      .pipe(map(response => response.data));
  }
}

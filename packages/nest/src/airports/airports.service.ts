import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { AirportForm } from '@nest-cra-monorepo/types';
import { validateAirport } from './airports.helpers';
import {
  CountryDto,
  AirportDto,
  AirlineDto,
  IlsDto,
  PaxServiceDto,
} from './airports.types';

@Injectable()
export class AirportsService {
  constructor(private httpService: HttpService) {}

  getCountries(): Observable<AxiosResponse<CountryDto[]>> {
    // @ToDo: ustawić porty i localhost w jakieś env
    return this.httpService
      .get('http://localhost:12000/api/countries')
      .pipe(map(response => response.data));
  }

  getAirports(): Observable<AxiosResponse<AirportDto[]>> {
    // @ToDo: ustawić porty i localhost w jakieś env
    return this.httpService
      .get('http://localhost:13000/api/airports')
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

  async createAirport(airportForm: AirportForm) {
    // @ToDo: Promise all?
    const countries = ((await this.getCountries().toPromise()) as unknown) as CountryDto[];
    const airports = ((await this.getAirports().toPromise()) as unknown) as AirportDto[];
    const airlines = ((await this.getAirlines().toPromise()) as unknown) as AirlineDto[];
    const ils = ((await this.getIls().toPromise()) as unknown) as IlsDto[];
    const paxServices = ((await this.getPaxServices().toPromise()) as unknown) as PaxServiceDto[];

    if (
      validateAirport({
        airportForm,
        countries,
        airports,
        airlines,
        ils,
        paxServices,
      })
    ) {
      await this.httpService
        .post('http://localhost:13000/api/airports', airportForm)
        .toPromise();
    } else {
      throw new Error('Airport data validation error');
    }
  }
}

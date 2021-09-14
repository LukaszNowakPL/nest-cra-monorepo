import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AirportForm } from '@nest-cra-monorepo/types';
import { validateAirport } from './airports.helpers';
import {CountriesService} from "../services/countries.service";
import {AirportsService as AirportsServiceService} from "../services/airports.service";
import {AirlinesService} from "../services/airlines.service";
import {IlsService} from "../services/ils.service";
import {PaxServicesService} from "../services/paxServices.service";
import {CountryDto} from "../services/countries.types";
import {AirportDto} from '../services/airports.types';
import {AirlineDto} from "../services/airlines.types";
import {IlsDto} from "../services/ils.types";
import {PaxServiceDto} from "../services/paxServices.types";

@Injectable()
export class AirportsService {
  constructor(
      private countriesService: CountriesService,
      private airportsService: AirportsServiceService,
      private airlinesService: AirlinesService,
      private ilsService: IlsService,
      private paxServicesService: PaxServicesService,
  ) {}

  getCountries(): Observable<AxiosResponse<CountryDto[]>> {
    return this.countriesService.getAll();
  }

  getAirports(): Observable<AxiosResponse<AirportDto[]>> {
    return this.airportsService.getAll();
  }

  getAirlines(): Observable<AxiosResponse<AirlineDto[]>> {
    return this.airlinesService.getAll();
  }

  getIls(): Observable<AxiosResponse<IlsDto[]>> {
    return this.ilsService.getAll();
  }

  getPaxServices(): Observable<AxiosResponse<PaxServiceDto[]>> {
    return this.paxServicesService.getAll();
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
      await this.airportsService.post(airportForm).toPromise();
    } else {
      throw new Error('Airport data validation error');
    }
  }
}

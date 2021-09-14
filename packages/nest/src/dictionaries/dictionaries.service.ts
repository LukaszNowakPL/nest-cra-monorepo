import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import {CountriesService} from "../services/countries.service";
import {CountryDto} from "../services/countries.types";
import {AirlinesService} from "../services/airlines.service";
import {AirlineDto} from "../services/airlines.types";
import {IlsService} from "../services/ils.service";
import {IlsDto} from '../services/ils.types';
import {PaxServicesService} from "../services/paxServices.service";
import {PaxServiceDto} from "../services/paxServices.types";

@Injectable()
export class DictionariesService {
  constructor(
      private countriesService: CountriesService,
      private airlinesService: AirlinesService,
      private ilsService: IlsService,
      private paxServicesService: PaxServicesService,
  ) {}

  getCountries(): Observable<AxiosResponse<CountryDto[]>> {
      return this.countriesService.getAll()
  }

  getAirlines(): Observable<AxiosResponse<AirlineDto[]>> {
      return this.airlinesService.getAll()
  }

  getIls(): Observable<AxiosResponse<IlsDto[]>> {
      return this.ilsService.getAll()
  }

  getPaxServices(): Observable<AxiosResponse<PaxServiceDto[]>> {
      return this.paxServicesService.getAll()
  }
}

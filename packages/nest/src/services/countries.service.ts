import {Inject, Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import {CountryDto} from './countries.types';

@Injectable()
export class CountriesService {
  constructor(
      private httpService: HttpService,
      @Inject('countriesServiceBaseUrl') private baseUrl: string,
  ) {}

    getAll(): Observable<AxiosResponse<CountryDto[]>> {
        return this.httpService
          .get(`${this.baseUrl}/countries`)
          .pipe(map(response => response.data));
    }
}

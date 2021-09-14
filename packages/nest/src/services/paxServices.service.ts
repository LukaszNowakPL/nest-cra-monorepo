import {Inject, Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import {PaxServiceDto} from './paxServices.types';

@Injectable()
export class PaxServicesService {
  constructor(
      private httpService: HttpService,
      @Inject('paxServicesServiceBaseUrl') private baseUrl: string,
  ) {}

    getAll(): Observable<AxiosResponse<PaxServiceDto[]>> {
        return this.httpService
          .get(`${this.baseUrl}/pax-services`)
          .pipe(map(response => response.data));
    }
}

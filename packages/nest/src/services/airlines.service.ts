import {Inject, Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import {AirlineDto} from './airlines.types';

@Injectable()
export class AirlinesService {
  constructor(
      private httpService: HttpService,
      @Inject('airlinesServiceBaseUrl') private baseUrl: string,
  ) {}

    getAll(): Observable<AxiosResponse<AirlineDto[]>> {
        return this.httpService
          .get(`${this.baseUrl}/airlines`)
          .pipe(map(response => response.data));
    }
}

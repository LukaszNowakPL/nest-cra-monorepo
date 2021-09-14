import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { IlsDto } from './ils.types';

@Injectable()
export class IlsService {
  constructor(
    private httpService: HttpService,
    @Inject('ilsServiceBaseUrl') private baseUrl: string,
  ) {}

  getAll(): Observable<AxiosResponse<IlsDto[]>> {
    return this.httpService
      .get(`${this.baseUrl}/ils`)
      .pipe(map(response => response.data));
  }
}

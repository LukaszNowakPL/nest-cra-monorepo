import { Injectable } from '@nestjs/common';
import { IlsDto } from './ils.types';

@Injectable()
export class IlsService {
  private readonly ils: IlsDto[] = [
    { id: 'none', description: 'none' },
    { id: 'cat1_single', description: 'cat1_single' },
    { id: 'cat1_both', description: 'cat1_both' },
    { id: 'cat2_single', description: 'cat2_single' },
    { id: 'cat2_both', description: 'cat2_both' },
    { id: 'cat3_single', description: 'cat3_single' },
    { id: 'cat3_both', description: 'cat3_both' },
  ];

  findAll(): IlsDto[] {
    return this.ils;
  }
}

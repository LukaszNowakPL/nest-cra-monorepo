import { Injectable } from '@nestjs/common';
import { CountryDto } from './countries.types';

@Injectable()
export class CountriesService {
  private readonly countries: CountryDto[] = [
    { id: 1, name: 'Poland' },
    { id: 2, name: 'Italy' },
    { id: 3, name: 'Spain' },
  ];

  findAll(): CountryDto[] {
    return this.countries;
  }
}

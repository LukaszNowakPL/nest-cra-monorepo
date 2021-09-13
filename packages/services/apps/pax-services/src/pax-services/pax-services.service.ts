import { Injectable } from '@nestjs/common';
import { PaxServiceDto } from './pax-services.types';

@Injectable()
export class PaxServicesService {
  private readonly paxServices: PaxServiceDto[] = [
    { id: 1, name: 'fasttrack', description: 'Fast track' },
    { id: 2, name: 'boarding_kiosks', description: 'Boarding kiosks' },
    { id: 3, name: 'public_transport', description: 'Public transportation' },
    { id: 4, name: 'observation_deck', description: 'Observation deck' },
    { id: 5, name: 'showers', description: 'Shower services' },
    { id: 6, name: 'airport_hotel', description: 'Airport hotel' },
  ];

  findAll(): PaxServiceDto[] {
    return this.paxServices;
  }
}

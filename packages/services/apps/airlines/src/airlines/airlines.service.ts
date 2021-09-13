import { Injectable } from '@nestjs/common';
import { AirlineDto } from './airlines.types';

@Injectable()
export class AirlinesService {
  private readonly airlines: AirlineDto[] = [
    { id: 1, name: 'Lufthansa', iata: 'lh' },
    { id: 2, name: 'PLL Lot', iata: 'lo' },
    { id: 3, name: 'Wizzair', iata: 'w6' },
    { id: 4, name: 'Vueling', iata: 'vy' },
    { id: 5, name: 'Ryanair', iata: 'fr' },
    { id: 6, name: 'easy jet', iata: 'u2' },
    { id: 7, name: 'Air france', iata: 'af' },
    { id: 8, name: 'SWISS', iata: 'lx' },
    { id: 9, name: 'KLM', iata: 'kl' },
  ];

  findAll(): AirlineDto[] {
    return this.airlines;
  }
}

import { Injectable } from '@nestjs/common';
import { AirportDto, AirportForm } from './airports.types';
import { remapAirportForm, validateAirport } from './airports.helpers';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { CountryDto } from '../services/countries.types';
import { AirlinesService } from '../services/airlines.service';
import { IlsService } from '../services/ils.service';
import { PaxServicesService } from '../services/paxServices.service';
import { AirlineDto } from '../services/airlines.types';
import { IlsDto, ILS } from '../services/ils.types';
import { PaxServiceDto } from '../services/paxServices.types';

@Injectable()
export class AirportsService {
  constructor(
    private countriesService: CountriesService,
    private airlinesService: AirlinesService,
    private ilsService: IlsService,
    private paxServicesService: PaxServicesService,
  ) {}

  private readonly airports: AirportDto[] = [
    {
      id: 1,
      country_id: 1,
      name: 'Warsaw',
      iata: 'WAW',
      pax_amount: 10000000,
      airlines: [2, 1, 3, 7, 8, 9],
      average_delay: 1,
      ils_equipment: ILS.CATIII_BOTH,
      services: [],
    },
    {
      id: 4,
      country_id: 1,
      name: 'Cracov',
      iata: 'KRK',
      pax_amount: 3800000,
      airlines: [5, 2, 1, 3],
      average_delay: 1,
      ils_equipment: ILS.CATII_BOTH,
      services: [],
    },
    {
      id: 5,
      country_id: 1,
      name: 'Gdańsk',
      iata: 'GDN',
      pax_amount: 3000000,
      airlines: [3, 2, 1, 5, 7, 9],
      average_delay: 1,
      ils_equipment: ILS.CATII_SINGLE,
      services: [],
    },
    {
      id: 6,
      country_id: 1,
      name: 'Wrocław',
      iata: 'WRO',
      pax_amount: 2100000,
      airlines: [5, 3, 2, 1, 7, 8],
      average_delay: 1,
      ils_equipment: ILS.CATI_BOTH,
      services: [],
    },
    {
      id: 7,
      country_id: 1,
      name: 'Katowice',
      iata: 'KTW',
      pax_amount: 4800000,
      airlines: [3, 1, 2, 5],
      average_delay: 1,
      ils_equipment: ILS.CATI_BOTH,
      services: [],
    },
    {
      id: 2,
      country_id: 2,
      name: 'Milan Malpensa',
      iata: 'MPX',
      pax_amount: 7200000,
      airlines: [1, 2, 3, 4, 5, 6, 7],
      average_delay: 1,
      ils_equipment: ILS.CATIII_BOTH,
      services: [],
    },
    {
      id: 8,
      country_id: 2,
      name: 'Rome Fiumicino',
      iata: 'FCO',
      pax_amount: 9800000,
      airlines: [1, 3, 4, 6, 7, 8, 9],
      average_delay: 1,
      ils_equipment: ILS.CATIII_BOTH,
      services: [],
    },
    {
      id: 9,
      country_id: 2,
      name: 'Palermo',
      iata: 'PMO',
      pax_amount: 6600000,
      airlines: [1, 3, 4, 5, 6, 7, 9],
      average_delay: 1,
      ils_equipment: ILS.CATII_BOTH,
      services: [],
    },
    {
      id: 10,
      country_id: 2,
      name: 'Catania',
      iata: 'CTA',
      pax_amount: 9900000,
      airlines: [1, 3, 4, 5, 6, 7, 9],
      average_delay: 1,
      ils_equipment: ILS.CATIII_SINGLE,
      services: [],
    },
    {
      id: 11,
      country_id: 2,
      name: 'Trapani',
      iata: 'TPS',
      pax_amount: 480000,
      airlines: [1, 5],
      average_delay: 1,
      ils_equipment: ILS.CATI_SINGLE,
      services: [],
    },
    {
      id: 12,
      country_id: 2,
      name: 'Comiso',
      iata: 'CIY',
      pax_amount: 420000,
      airlines: [4, 5, 6],
      average_delay: 1,
      ils_equipment: ILS.CATI_SINGLE,
      services: [],
    },
    {
      id: 3,
      country_id: 3,
      name: 'Barcelona',
      iata: 'BCN',
      pax_amount: 50100000,
      airlines: [1, 3, 4, 5, 6, 7, 8, 9],
      average_delay: 1,
      ils_equipment: ILS.CATIII_BOTH,
      services: [],
    },
    {
      id: 13,
      country_id: 3,
      name: 'Madrid',
      iata: 'MAD',
      pax_amount: 17110000,
      airlines: [1, 3, 4, 5, 6, 7, 8, 9],
      average_delay: 1,
      ils_equipment: ILS.CATIII_BOTH,
      services: [],
    },
    {
      id: 14,
      country_id: 3,
      name: 'Sevilla',
      iata: 'SVQ',
      pax_amount: 5100000,
      airlines: [1, 4, 5, 6, 7, 9],
      average_delay: 1,
      ils_equipment: ILS.CATII_BOTH,
      services: [],
    },
    {
      id: 15,
      country_id: 3,
      name: 'Palma de Mallorca',
      iata: 'PMI',
      pax_amount: 29700000,
      airlines: [1, 4, 5, 6, 7, 8, 9],
      average_delay: 1,
      ils_equipment: ILS.CATII_BOTH,
      services: [],
    },
    {
      id: 16,
      country_id: 3,
      name: 'Menorca',
      iata: 'MAH',
      pax_amount: 3430000,
      airlines: [1, 4, 5, 6, 7, 8, 9],
      average_delay: 1,
      ils_equipment: ILS.CATI_BOTH,
      services: [],
    },
    {
      id: 17,
      country_id: 3,
      name: 'Tenerife Norte',
      iata: 'TFN',
      pax_amount: 4700000,
      airlines: [4, 5],
      average_delay: 1,
      ils_equipment: ILS.CATII_BOTH,
      services: [],
    },
  ];

  findAll(): AirportDto[] {
    return this.airports;
  }

  findByCountry(id: number): AirportDto[] {
    return this.airports.filter(airportItem => airportItem.country_id === id);
  }

  private getCountries(): Observable<AxiosResponse<CountryDto[]>> {
    return this.countriesService.getAll();
  }

  private getAirlines(): Observable<AxiosResponse<AirlineDto[]>> {
    return this.airlinesService.getAll();
  }

  private getIls(): Observable<AxiosResponse<IlsDto[]>> {
    return this.ilsService.getAll();
  }

  private getPaxServices(): Observable<AxiosResponse<PaxServiceDto[]>> {
    return this.paxServicesService.getAll();
  }

  async create(airportForm: AirportForm) {
    const countries = ((await this.getCountries().toPromise()) as unknown) as CountryDto[];
    const airports = this.findAll();
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
      const airport = remapAirportForm(airportForm, this.airports.length);
      this.airports.push(airport);
    } else {
      throw new Error('Airport data validation error');
    }
  }
}

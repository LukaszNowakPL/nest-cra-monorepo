import { Controller, Get } from '@nestjs/common';
import { DictionariesService } from './dictionaries.service';
import { DictionariesDto } from '@nest-cra-monorepo/types';
import { getMappedDictionary } from './dictionaries.helpers';
import {CountryDto} from "../services/countries.types";
import {AirlineDto} from "../services/airlines.types";
import {IlsDto} from "../services/ils.types";
import {PaxServiceDto} from '../services/paxServices.types';

@Controller('api/dictionaries')
export class DictionariesController {
  constructor(private readonly dictionariesService: DictionariesService) {}

  //@ToDo: pewnie jakiś promise all
  // @ToDo: przerzucić logikę do serwisu
  @Get()
  async index(): Promise<DictionariesDto> {
    const countries = await this.dictionariesService.getCountries().toPromise();
    const airlines = await this.dictionariesService.getAirlines().toPromise();
    const ils = await this.dictionariesService.getIls().toPromise();
    const paxServices = await this.dictionariesService
      .getPaxServices()
      .toPromise();

    return getMappedDictionary({
      countries: (countries as unknown) as CountryDto[],
      airlines: (airlines as unknown) as AirlineDto[],
      ils: (ils as unknown) as IlsDto[],
      paxServices: (paxServices as unknown) as PaxServiceDto[],
    });
  }
}

import { DictionariesDto } from '@nest-cra-monorepo/types';
import {
  AirlineDto,
  CountryDto,
  IlsDto,
  PaxServiceDto,
} from './dictionaries.types';

export const getMappedDictionary = ({
  countries,
  ...params
}: {
  countries: CountryDto[];
  airlines: AirlineDto[];
  ils: IlsDto[];
  paxServices: PaxServiceDto[];
}): DictionariesDto => {
  const airlines = getMappedAirlines(params.airlines);
  const ils = getMappedIls(params.ils);
  const paxServices = getMappedPaxServices(params.paxServices);
  return {
    countries,
    airlines,
    ils,
    pax_services: paxServices,
  };
};

const getMappedAirlines = (
  airlines: AirlineDto[],
): DictionariesDto['airlines'] => {
  return airlines.map(({ id, name }) => {
    return { id, name };
  });
};

const getMappedIls = (ils: IlsDto[]): DictionariesDto['ils'] => {
  return ils.map(({ id }) => {
    return { id };
  });
};

const getMappedPaxServices = (
  paxServices: PaxServiceDto[],
): DictionariesDto['pax_services'] => {
  return paxServices.map(({ name: id, description: serviceName }) => {
    return { id, name: serviceName };
  });
};

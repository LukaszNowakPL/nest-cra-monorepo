import { CountryAirportDto } from '@nest-cra-monorepo/types';
import { AirportDto } from './countries.types';

export const getMappedAirports = (
  airports: AirportDto[],
): CountryAirportDto[] => {
  return airports.map(({ name, iata, airlines, pax_amount, ils_equipment }) => {
    return {
      name,
      iata,
      airlines,
      paxAmount: pax_amount,
      ils: ils_equipment,
    };
  });
};

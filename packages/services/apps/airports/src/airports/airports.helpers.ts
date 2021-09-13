import { AirportDto, AirportForm } from './airports.types';

export const remapAirportForm = (
  { pax_amount, airlines, average_delay, ...rest }: AirportForm,
  id: number,
): AirportDto => {
  return {
    id,
    pax_amount: Number(pax_amount),
    airlines: airlines.map(airline => Number(airline)),
    average_delay: Number(average_delay),
    ...rest,
  };
};

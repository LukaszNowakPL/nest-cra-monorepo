import { AirportForm } from '@nest-cra-monorepo/types';
import {CountryDto} from '../services/countries.types';
import {AirportDto} from "../services/airports.types";
import {AirlineDto} from '../services/airlines.types';
import {IlsDto} from "../services/ils.types";
import {PaxServiceDto} from "../services/paxServices.types";

interface ValidateAirportArgs {
  airportForm: AirportForm;
  countries: CountryDto[];
  airports: AirportDto[];
  airlines: AirlineDto[];
  ils: IlsDto[];
  paxServices: PaxServiceDto[];
}

export const validateAirport = ({
  airportForm: {
    country_id: countryId,
    name,
    iata,
    pax_amount: paxAmount,
    airlines: selectedAirlines,
    average_delay: averageDelay,
    ils_equipment: ilsEquipment,
    services,
  },
  countries,
  airports,
  airlines,
  ils,
  paxServices,
}: ValidateAirportArgs): boolean => {
  // @ToDo: Maybe throw error on every false?

  // Country
  // If exists on service
  if (countries.find(country => country.id === countryId) === undefined) {
    return false;
  }

  // City
  // If unique in selected country
  if (
    airports.find(
      airport =>
        airport.name === name &&
        Number(airport.country_id) === Number(countryId),
    ) !== undefined
  ) {
    return false;
  }

  // Iata
  // If 3 uppercase chars
  if (!/\b([A-Z]{3})\b/.test(iata)) {
    return false;
  }
  // If unique
  if (airports.find(airport => airport.iata === iata) !== undefined) {
    return false;
  }

  // Pax amount
  // @ToDo: Maybe numericPaxAmount = Number(paxAmount) ?
  // If numeric
  if (paxAmount !== String(Number(paxAmount))) {
    return false;
  }
  // If greater than 0
  if (Number(paxAmount) <= 0) {
    return false;
  }
  // If full number
  if (
    Number(paxAmount) !== Math.floor(Number(paxAmount)) ||
    Number(paxAmount) !== Math.ceil(Number(paxAmount))
  ) {
    return false;
  }

  // Airlines
  // At least one is selected
  if (selectedAirlines.length === 0) {
    return false;
  }
  // If each airline exists on service
  if (
    selectedAirlines.some(
      selectedAirline =>
        airlines.find(airline => airline.id === selectedAirline) === undefined,
    )
  ) {
    return false;
  }

  // Average delay
  // @ToDo: Maybe numericAverageDelay = Number(averageDelay) ?
  // If numeric
  if (averageDelay !== String(Number(averageDelay))) {
    return false;
  }
  // If decimal scale < 3
  if (
    Number(averageDelay) * 100 !== Math.floor(Number(averageDelay)) * 100 ||
    Number(averageDelay) * 100 !== Math.ceil(Number(averageDelay)) * 100
  ) {
    return false;
  }

  // Ils
  // If exists on service
  if (ils.find(ils => ils.id === ilsEquipment) === undefined) {
    return false;
  }

  // Pax Services
  // If each pax service exists on service
  if (
    services.some(
      service =>
        paxServices.find(paxService => service === paxService.name) ===
        undefined,
    )
  ) {
    return false;
  }

  return true;
};

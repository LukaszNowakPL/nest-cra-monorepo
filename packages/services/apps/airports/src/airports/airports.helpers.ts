import { AirportDto, AirportForm } from './airports.types';
import { CountryDto } from '../services/countries.types';
import { AirlineDto } from '../services/airlines.types';
import { IlsDto } from '../services/ils.types';
import { PaxServiceDto } from '../services/paxServices.types';

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
  // Country
  // If exists on service
  if (countries.find(country => country.id === countryId) === undefined) {
    throwError(`country_id ${countryId} is not found on service`);
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
    throwError(`name ${name} is not unique in selected country ${countryId}`);
  }

  // Iata
  // If 3 uppercase chars
  if (!/\b([A-Z]{3})\b/.test(iata)) {
    throwError(`iata ${iata} is not 3 uppercase chars`);
  }
  // If unique
  if (airports.find(airport => airport.iata === iata) !== undefined) {
    throwError(`iata '${iata}' is not unique in service`);
  }

  // Pax amount
  const numericPaxAmount = Number(paxAmount);
  // If numeric
  if (paxAmount !== String(numericPaxAmount)) {
    throwError(`pax_amount ${paxAmount} is not numeric`);
  }
  // If greater than 0
  if (numericPaxAmount <= 0) {
    throwError(`pax_amount ${paxAmount} is not greater than 0`);
  }
  // If full number
  if (
    numericPaxAmount !== Math.floor(numericPaxAmount) ||
    numericPaxAmount !== Math.ceil(numericPaxAmount)
  ) {
    throwError(`pax_amount ${paxAmount} is fraction number`);
  }

  // Airlines
  // At least one is selected
  if (selectedAirlines.length === 0) {
    throwError(`no airline is selected`);
  }
  // If each airline exists on service
  if (
    selectedAirlines.some(
      selectedAirline =>
        airlines.find(airline => airline.id === selectedAirline) === undefined,
    )
  ) {
    throwError(
      `airlines ${JSON.stringify(
        selectedAirlines.filter(
          selectedAirline =>
            airlines.find(airline => airline.id === selectedAirline) ===
            undefined,
        ),
      )} not found on service`,
    );
  }

  // Average delay
  const numericAverageDelay = Number(averageDelay);
  // If numeric
  if (averageDelay !== String(numericAverageDelay)) {
    throwError(`average_delay ${averageDelay} is not numeric`);
  }
  // If decimal scale < 3
  if (
    numericAverageDelay * 100 !== Math.floor(numericAverageDelay) * 100 ||
    numericAverageDelay * 100 !== Math.ceil(numericAverageDelay) * 100
  ) {
    throwError(
      `average_delay ${averageDelay} is fraction of more than 2 digits`,
    );
  }

  // Ils
  // If exists on service
  if (ils.find(ils => ils.id === ilsEquipment) === undefined) {
    throwError(`ils ${ils} not found on a service`);
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
    throwError(
      `pax_service ${services.filter(
        service =>
          paxServices.find(paxService => service === paxService.name) ===
          undefined,
      )} not found on a service`,
    );
  }

  return true;
};

const throwError = (errorDetails: string) => {
  throw new Error(`POST /api/airports Body validation failed: ${errorDetails}`);
};

export const remapAirportForm = (
  { pax_amount, average_delay, ...rest }: AirportForm,
  id: number,
): AirportDto => {
  return {
    id,
    pax_amount: Number(pax_amount),
    average_delay: Number(average_delay),
    ...rest,
  };
};

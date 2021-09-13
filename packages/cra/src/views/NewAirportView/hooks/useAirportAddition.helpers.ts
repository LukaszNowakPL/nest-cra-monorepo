import {AirportModel} from '../utils/types';
import {AirportForm} from "@nest-cra-monorepo/types";

export const mapAirportModelToForm = (airportModel: AirportModel): AirportForm => {
    const {city, iata, countryId, paxAmount, airlineId: airlines, averageDelay, ils, passengerServices, notes} = airportModel;
    return {
        country_id: Number(countryId),
        name: city,
        iata,
        pax_amount: String(paxAmount || '0'),
        airlines,
        average_delay: String(averageDelay),
        ils_equipment: ils,
        services: passengerServices,
        notes,
    };
};

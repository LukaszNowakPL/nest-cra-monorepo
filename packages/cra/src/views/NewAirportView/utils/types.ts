import {DictionariesDto} from "@nest-cra-monorepo/types";

export interface AirportModel {
    countryId: string;
    city: string;
    iata: string;
    paxAmount?: number;
    airlineId: number[];
    averageDelay: number;
    ils: DictionariesDto['ils'][number]['id'];
    passengerServices: DictionariesDto['pax_services'][number]['id'][];
    notes?: string;
}

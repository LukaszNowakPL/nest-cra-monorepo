import {ILS} from "./ils.types";
import {PAX_SERVICE} from "./paxServices.types";

export interface AirportDto {
    id: number;
    country_id: string;
    name: string;
    iata: string;
    pax_amount: number;
    airlines: number[];
    average_delay: number;
    ils_equipment: ILS;
    services: PAX_SERVICE[];
}

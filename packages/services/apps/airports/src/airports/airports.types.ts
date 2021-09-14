import { PAX_SERVICE } from '../services/paxServices.types';
import { ILS } from '../services/ils.types';

export interface AirportDto {
  id: number;
  country_id: number;
  name: string;
  iata: string;
  pax_amount: number;
  airlines: number[];
  average_delay: number;
  ils_equipment: ILS;
  services: PAX_SERVICE[];
  notes?: string;
}

export interface AirportForm {
  country_id: number;
  name: string;
  iata: string;
  pax_amount: string;
  airlines: number[];
  average_delay: string;
  ils_equipment: ILS;
  services: PAX_SERVICE[];
  notes?: string;
}

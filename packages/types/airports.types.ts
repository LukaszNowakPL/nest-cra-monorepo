// @ToDo: Consider to centralize as ILS / PAX_SERVICE is defined on each api
enum ILS {
  NONE = "none",
  CATI_SINGLE = "cat1_single",
  CATI_BOTH = "cat1_both",
  CATII_SINGLE = "cat2_single",
  CATII_BOTH = "cat2_both",
  CATIII_SINGLE = "cat3_single",
  CATIII_BOTH = "cat3_both"
}

enum PAX_SERVICE {
  FASTTRACK = "fasttrack",
  BOARDING_KIOSKS = "boarding_kiosks",
  PUBLIC_TRANSPORT = "public_transport",
  OBSERVATION_DECK = "observation_deck",
  SHOWERS = "showers",
  AIPORT_HOTEL = "airport_hotel"
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

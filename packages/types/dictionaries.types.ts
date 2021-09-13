interface CountryDto {
  id: number;
  name: string;
}

interface AirlineDto {
  id: number;
  name: string;
}

enum ILS {
  NONE = "none",
  CATI_SINGLE = "cat1_single",
  CATI_BOTH = "cat1_both",
  CATII_SINGLE = "cat2_single",
  CATII_BOTH = "cat2_both",
  CATIII_SINGLE = "cat3_single",
  CATIII_BOTH = "cat3_both"
}

interface IlsDto {
  id: ILS;
}

enum PAX_SERVICE {
  FASTTRACK = "fasttrack",
  BOARDING_KIOSKS = "boarding_kiosks",
  PUBLIC_TRANSPORT = "public_transport",
  OBSERVATION_DECK = "observation_deck",
  SHOWERS = "showers",
  AIPORT_HOTEL = "airport_hotel"
}

interface PaxServiceDto {
  id: PAX_SERVICE;
  name: string;
}

export interface DictionariesDto {
  countries: CountryDto[];
  airlines: AirlineDto[];
  ils: IlsDto[];
  pax_services: PaxServiceDto[];
}

export interface CountryDto {
  id: number;
  name: string;
}

export interface AirlineDto {
  id: number;
  name: string;
  iata: string;
}

enum ILS {
  NONE = 'none',
  CATI_SINGLE = 'cat1_single',
  CATI_BOTH = 'cat1_both',
  CATII_SINGLE = 'cat2_single',
  CATII_BOTH = 'cat2_both',
  CATIII_SINGLE = 'cat3_single',
  CATIII_BOTH = 'cat3_both',
}

export interface IlsDto {
  id: ILS;
  description: string;
}

enum PAX_SERVICE {
  FASTTRACK = 'fasttrack',
  BOARDING_KIOSKS = 'boarding_kiosks',
  PUBLIC_TRANSPORT = 'public_transport',
  OBSERVATION_DECK = 'observation_deck',
  SHOWERS = 'showers',
  AIPORT_HOTEL = 'airport_hotel',
}

export interface PaxServiceDto {
  id: number;
  name: PAX_SERVICE;
  description: string;
}

export enum PAX_SERVICE {
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

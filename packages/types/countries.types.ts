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

export interface CountryAirportDto {
  name: string;
  iata: string;
  airlines: number[];
  paxAmount: number;
  ils: ILS;
}

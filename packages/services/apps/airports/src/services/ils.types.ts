export enum ILS {
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

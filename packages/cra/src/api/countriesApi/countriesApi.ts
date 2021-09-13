import {axios} from '../rest/axios';
import {CountryAirportDto} from "@nest-cra-monorepo/types";

export const getCountryAirports = async (idCountry: string) => {
    const {data} = await axios.get<CountryAirportDto[]>(`/countries/${idCountry}/airports`);
    return data;
};

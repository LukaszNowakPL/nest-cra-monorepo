import {useQuery} from 'react-query';
import {QUERY} from '../../../utils/types';
import {getCountryAirports} from '../../../api/countriesApi/countriesApi';

export const useCountryAirports = (countryId: string) => {
    return useQuery([QUERY.COUNTRY_AIRPORTS, countryId], async () => getCountryAirports(countryId), {
        refetchOnWindowFocus: false,
    });
};

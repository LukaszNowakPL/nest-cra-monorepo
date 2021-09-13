import {useQuery} from 'react-query';
import {QUERY} from '../utils/types';
import {getDictionaries} from "../api/dictionariesApi/dictionariesApi";

export const useDictionaries = () => {
    return useQuery(QUERY.DICTIONARIES, async () => getDictionaries(), {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    });
};

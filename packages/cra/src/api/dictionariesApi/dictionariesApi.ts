import {axios} from '../rest/axios';
import {DictionariesDto} from "@nest-cra-monorepo/types";

export const getDictionaries = async () => {
    const {data} = await axios.get<DictionariesDto>('/dictionaries');
    return data;
};

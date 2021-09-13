import {axios} from '../rest/axios';
import {AirportForm} from "@nest-cra-monorepo/types";

export const postAirport = (values: AirportForm) => {
    return axios.post(`/airports`, values);
};

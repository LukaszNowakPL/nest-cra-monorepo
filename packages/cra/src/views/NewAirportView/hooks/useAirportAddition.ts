import {useMutation} from 'react-query';
import {AirportModel} from '../utils/types';
import {postAirport} from "../../../api/airportsApi/airportsApi";
import {mapAirportModelToForm} from './useAirportAddition.helpers';

interface AddAirportProps {
    values: AirportModel;
}

export const useAirportAddition = () => {
    const {mutateAsync: addAirport} = useMutation(
        ({values}: AddAirportProps) => postAirport(mapAirportModelToForm(values)),
        {
            onSuccess: () => {
                // Some confirmation info, nevertheless usage of toast() break tests
            },
            onError: () => {
                // Some error message, nevertheless usage of toast() break tests
            },
        },
    );
    return {
        addAirport,
    };
};

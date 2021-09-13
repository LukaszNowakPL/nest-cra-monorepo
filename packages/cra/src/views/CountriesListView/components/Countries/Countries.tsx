import {Alert, AlertDescription, AlertIcon} from '@chakra-ui/react';
import React from 'react';
import {CountriesTable} from '../CountriesTable/CountriesTable';
import {Spinner} from '../../../../components/Spinner/Spinner';
import {useDictionaries} from "../../../../hooks/useDictionaries";

export const Countries: React.FC = () => {
    const {data, isFetching, error} = useDictionaries();

    return (
        <>
            {isFetching && <Spinner />}
            {error && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>Fetching list of countries failed.</AlertDescription>
                </Alert>
            )}
            {data && <CountriesTable countries={data.countries} />}
        </>
    );
};

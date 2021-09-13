import {Alert, AlertDescription, AlertIcon, Stack, Text, Code} from '@chakra-ui/react';
import React from 'react';
import {useParams} from 'react-router';
import {Spinner} from '../../components/Spinner/Spinner';
import {AirportsTable} from "./AirportsTable/AirportsTable";
import {useIsFetching} from 'react-query';
import {useCountryAirports} from "./hooks/useCountryAirports";
import {useDictionaries} from "../../hooks/useDictionaries";

export const AirportsListView: React.FC = () => {
    const {countryId} = useParams<{countryId: string}>();
    const {data: airports, error} = useCountryAirports(countryId);
    const {data: dictionaries} = useDictionaries();
    const isFetching = useIsFetching();
    const countryName = dictionaries?.countries.find(country => country.id === Number(countryId))?.name;
    return (
        <Stack spacing={3}>
            {isFetching > 0 && <Spinner />}
            {error && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>Fetching country data failed.</AlertDescription>
                </Alert>
            )}
            {airports && countryName && (
                <>
                    <Text>
                        Airports list in <Code>{countryName}</Code>
                    </Text>
                    <Stack spacing={3}>
                        <AirportsTable airports={airports} />
                    </Stack>
                </>
            )}
        </Stack>
    );
};

export default AirportsListView;

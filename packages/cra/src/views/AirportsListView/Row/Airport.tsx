import React from 'react';
import {Tr, Td} from '@chakra-ui/react';
import {AirportAirlines} from './AirportAirlines';
import {AirportIls} from './AirportIls';
import {CountryAirportDto} from "@nest-cra-monorepo/types";

interface AirportProps {
    airport: CountryAirportDto;
}

export const Airport: React.FC<AirportProps> = ({airport: {airlines, name, iata, paxAmount, ils}}) => {
    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{iata}</Td>
            <Td>{paxAmount}</Td>
            <Td>
                <AirportAirlines airlines={airlines} />
            </Td>
            <Td>
                <AirportIls ils={ils} />
            </Td>
        </Tr>
    );
};

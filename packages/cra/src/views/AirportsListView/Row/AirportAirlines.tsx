import React from 'react';
import {Tooltip, Badge} from '@chakra-ui/react';
import {getMappedAirlines} from './Airports.helpers';
import {useDictionaries} from "../../../hooks/useDictionaries";

interface AirportAirlinesProps {
    airlines: number[];
}

export const AirportAirlines: React.FC<AirportAirlinesProps> = ({airlines}) => {
    const {data} = useDictionaries();
    const mappedAirlines = getMappedAirlines(data?.airlines || [], airlines);
    return (
        <Tooltip label={mappedAirlines.join(', ')}>
            <Badge>{mappedAirlines.length}</Badge>
        </Tooltip>
    );
};

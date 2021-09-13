import React from 'react';
import {Badge} from '@chakra-ui/react';
import {getIlsCategory, getIlsSide} from './Airports.helpers';
import {CountryAirportDto} from "@nest-cra-monorepo/types";

interface AirportIlsProps {
    ils: CountryAirportDto['ils'];
}

export const AirportIls: React.FC<AirportIlsProps> = ({ils}) => {
    const category = getIlsCategory(ils);
    const side = getIlsSide(ils);
    return (
        <>
            <Badge background={'red'} color={'white'} marginRight={'10px'}>
                {category}
            </Badge>
            {side}
        </>
    );
};

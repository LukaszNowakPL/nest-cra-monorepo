import React from 'react';
import {Button, Tr, Td} from '@chakra-ui/react';
import {generatePath, useHistory} from 'react-router';
import {ROUTES} from '../../../../utils/routes';
import {DictionariesDto} from "@nest-cra-monorepo/types";

interface CountriesTableRowProps {
    country: DictionariesDto['countries'][number];
}

export const CountriesTableRow: React.FC<CountriesTableRowProps> = ({country}) => {
    const history = useHistory();
    const handleClick = () => {
        const pathname = generatePath(ROUTES.AIRPORTS_LIST, {countryId: country.id});
        history.push({pathname});
    };
    return (
        <Tr>
            <Td>{country.name}</Td>
            <Td>
                <Button onClick={handleClick}>Airports</Button>
            </Td>
        </Tr>
    );
};

import {FormControl, FormErrorMessage, FormLabel, Select} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from "formik";
import {useIsFetching} from "react-query";
import {AirportModel} from "../../utils/types";
import {getIsFieldDisabled} from '../../utils/helpers';
import {useDictionaries} from "../../../../hooks/useDictionaries";

export const Country: React.FC = () => {
    const {data} = useDictionaries();
    const [field,{error, touched}] = useField('countryId');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    return (
        <FormControl data-test-id={'country-area'} id="countryId" isInvalid={touched && !!error} isDisabled={isFieldDisabled} marginBottom={'10px'}>
            <FormLabel>Country</FormLabel>
            <Select placeholder={'Select country'} {...field}>
                {data?.countries.map(country => <option key={country.id} value={country.id}>{country.name}</option>)}
            </Select>
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};

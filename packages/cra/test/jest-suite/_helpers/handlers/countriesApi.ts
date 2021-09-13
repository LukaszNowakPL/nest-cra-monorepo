import {rest} from 'msw';
import {isBodySame} from './_reqBodyHelpers';
import {AirportForm} from "@nest-cra-monorepo/types";

export const postAirportHandler = (countryId: number, formData: AirportForm) =>
    rest.post(`/api/countries/${countryId}/airports`, (req, res, ctx) => {
        if (isBodySame(formData, req)) {
            return res(ctx.json({}));
        }
    });

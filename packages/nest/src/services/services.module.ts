import {Module} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import {AirlinesService} from "./airlines.service";
import {CountriesService} from "./countries.service";
import {AirportsService} from "./airports.service";
import {IlsService} from "./ils.service";
import {PaxServicesService} from "./paxServices.service";
import {config} from "dotenv";

config({path: './../../.env'});

@Module({
    imports: [HttpModule],
    providers: [
        AirlinesService,
        {
            provide: 'airlinesServiceBaseUrl',
            useValue: `${process.env.AIRLINES_SERVICE_URL}:${process.env.AIRLINES_SERVICE_PORT}/api`
        },
        CountriesService,
        {
            provide: 'countriesServiceBaseUrl',
            useValue: `${process.env.COUNTRIES_SERVICE_URL}:${process.env.COUNTRIES_SERVICE_PORT}/api`
        },
        AirportsService,
        {
            provide: 'airportsServiceBaseUrl',
            useValue: `${process.env.AIRPORTS_SERVICE_URL}:${process.env.AIRPORTS_SERVICE_PORT}/api`
        },
        IlsService,
        {
            provide: 'ilsServiceBaseUrl',
            useValue: `${process.env.ILS_SERVICE_URL}:${process.env.ILS_SERVICE_PORT}/api`
        },
        PaxServicesService,
        {
            provide: 'paxServicesServiceBaseUrl',
            useValue: `${process.env.PAX_SERVICES_SERVICE_URL}:${process.env.PAX_SERVICES_SERVICE_PORT}/api`
        },
    ],
    exports: [AirlinesService, CountriesService, AirportsService, IlsService, PaxServicesService]
})
export class ServicesModule {}

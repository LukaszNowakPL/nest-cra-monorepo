import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import {config} from "dotenv";

config({path: './../../.env'});
@Module({
  imports: [HttpModule.register({
      baseURL: `${process.env.AIRPORTS_SERVICE_URL}:${process.env.AIRPORTS_SERVICE_PORT}/api`
  })],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}

import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import {ServicesModule} from "../services/services.module";

@Module({
  imports: [ServicesModule],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}

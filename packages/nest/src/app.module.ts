import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { DictionariesModule } from './dictionaries/dictionaries.module';
import { AirportsModule } from './airports/airports.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [CountriesModule, DictionariesModule, AirportsModule, ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

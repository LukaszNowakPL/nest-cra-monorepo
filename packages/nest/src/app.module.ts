import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { DictionariesModule } from './dictionaries/dictionaries.module';
import { AirportsModule } from './airports/airports.module';

@Module({
  imports: [CountriesModule, DictionariesModule, AirportsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

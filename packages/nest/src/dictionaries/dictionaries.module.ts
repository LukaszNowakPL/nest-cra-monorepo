import { Module } from '@nestjs/common';
import { DictionariesController } from './dictionaries.controller';
import { DictionariesService } from './dictionaries.service';
import {ServicesModule} from "../services/services.module";

@Module({
  imports: [ServicesModule],
  providers: [DictionariesService],
  controllers: [DictionariesController],
})
export class DictionariesModule {}

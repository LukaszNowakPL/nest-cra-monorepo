import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DictionariesController } from './dictionaries.controller';
import { DictionariesService } from './dictionaries.service';
import {ServicesModule} from "../services/services.module";

@Module({
  imports: [HttpModule, ServicesModule],
  providers: [DictionariesService],
  controllers: [DictionariesController],
})
export class DictionariesModule {}

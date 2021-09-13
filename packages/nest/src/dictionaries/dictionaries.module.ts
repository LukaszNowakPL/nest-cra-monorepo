import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DictionariesController } from './dictionaries.controller';
import { DictionariesService } from './dictionaries.service';

@Module({
  imports: [HttpModule],
  providers: [DictionariesService],
  controllers: [DictionariesController],
})
export class DictionariesModule {}

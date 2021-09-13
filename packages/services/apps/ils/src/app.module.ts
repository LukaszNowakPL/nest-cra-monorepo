import { Module } from '@nestjs/common';
import { IlsModule } from './ils/ils.module';

@Module({
  imports: [IlsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

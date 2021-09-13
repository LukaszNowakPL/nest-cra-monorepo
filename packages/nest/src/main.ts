import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Być może warto ustawić 7000 w zmiennej środowiskowej projektu
  await app.listen(7000);
}
bootstrap();

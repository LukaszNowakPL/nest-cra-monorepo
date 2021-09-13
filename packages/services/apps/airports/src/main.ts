import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {config} from "dotenv";

async function bootstrap() {
    config({path: './../../.env'});
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.AIRPORTS_SERVICE_PORT);
}
bootstrap();

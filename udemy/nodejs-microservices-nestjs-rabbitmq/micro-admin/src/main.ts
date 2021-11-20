// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL],
        noAck: false,
        queue: process.env.RABBITMQ_QUEUE_ADMIN,
      },
    },
  );
  app.listen();
}

bootstrap();

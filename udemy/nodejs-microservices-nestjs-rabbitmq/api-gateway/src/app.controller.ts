import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CriarCategoriaDto } from './dtos/criar-catregoria.dto';

@Controller('api/v1')
export class AppController {
  private logger: Logger;

  private clientAdminBackend: ClientProxy;

  constructor() {
    this.logger = new Logger(AppController.name);
    this.clientAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL],
        queue: process.env.RABBITMQ_QUEUE_ADMIN,
      },
    });
  }

  @Post('categorias')
  @UsePipes(ValidationPipe)
  async criarCategori(@Body() dto: CriarCategoriaDto) {
    return this.clientAdminBackend.emit('criar-categoria', dto);
  }
}

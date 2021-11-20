import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
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
  criarCategoria(@Body() dto: CriarCategoriaDto) {
    this.clientAdminBackend.emit('criar-categoria', dto);
  }
  @Get('categorias')
  consultarCategoriaPeloId(@Query('id') id: string): Observable<any> {
    return this.clientAdminBackend.send('consultar-categorias', {id});
  }
}

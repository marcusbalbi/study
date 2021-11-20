import { Controller, Get, Logger, Param } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { Categoria } from './interfaces/categorias/categoria.interface';

const ackErrors = ['E11000'];

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @EventPattern('criar-categoria')
  async criarCategoria(
    @Payload() categoria: Categoria,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    this.logger.log(`Categoria Recebida: ${JSON.stringify(categoria)}`);
    try {
      await this.appService.criarCategoria(categoria);
      await channel.ack(originalMessage);
    } catch (e) {
      this.logger.error(
        `Erro ao Gravar Categoria:: ${JSON.stringify(e.message)}`,
      );
      ackErrors.map(async ackErr => {
        if (e.message.includes(ackErr)) {
          await channel.ack(originalMessage);
        }
      })
    }
  }

  @MessagePattern('consultar-categorias')
  consultarCategorias(@Payload() data) {
    if (data && data.id) {
      return this.appService.consultarCategoriaPeloId(data.id);
    }

    return this.appService.consultarTodasCategorias();
  }
}

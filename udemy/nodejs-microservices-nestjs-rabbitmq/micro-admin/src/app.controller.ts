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
      const foundAckError = ackErrors.filter((ackErr) =>
        e.message.includes(ackErr),
      );
      if (foundAckError) {
        await channel.ack(originalMessage);
      }
    }
  }

  @MessagePattern('consultar-categorias')
  consultarCategorias(@Payload() data, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    try {
      if (data && data.id) {
        return this.appService.consultarCategoriaPeloId(data.id);
      }

      return this.appService.consultarTodasCategorias();
    } finally {
      channel.ack(originalMessage);
    }
  }

  @EventPattern('atualizar-categoria')
  async atualizarCategoria(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    this.logger.log(`Categoria para ser atualizada: ${JSON.stringify(data)}`);
    try {
      await this.appService.atualizarCategoria(data.id, data.categoria);
      await channel.ack(originalMessage);
    } catch (e) {
      this.logger.error(
        `Erro ao Gravar Categoria:: ${JSON.stringify(e.message)}`,
      );
      const foundAckError = ackErrors.filter((ackErr) =>
        e.message.includes(ackErr),
      );
      if (foundAckError) {
        await channel.ack(originalMessage);
      }
    }
  }
}

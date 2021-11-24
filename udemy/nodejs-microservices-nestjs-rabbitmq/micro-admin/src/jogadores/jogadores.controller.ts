import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { Jogador } from './Jogador.interface';
import { JogadoresService } from './jogadores.service';

const ackErrors = ['E11000'];

@Controller()
export class JogadoresController {
  private logger = new Logger(JogadoresController.name);
  constructor(private readonly service: JogadoresService) {}

  @EventPattern('criar-jogador')
  async criarJogador(@Payload() jogador: Jogador, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    this.logger.log(`Jogador Recebida: ${JSON.stringify(jogador)}`);
    try {
      await this.service.criarJogador(jogador);
      await channel.ack(originalMessage);
    } catch (e) {
      this.logger.error(
        `Erro ao Gravar Jogador:: ${JSON.stringify(e.message)}`,
      );
      const foundAckError = ackErrors.filter((ackErr) =>
        e.message.includes(ackErr),
      );
      if (foundAckError) {
        await channel.ack(originalMessage);
      }
    }
  }

  @MessagePattern('consultar-jogadores')
  consultarJogadores(@Payload() data, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    this.logger.log(`Consultar jogador com os dados ${JSON.stringify(data)}`)
    try {
      if (data && data.id) {
        return this.service.consultarJogadorPeloId(data.id);
      }

      return this.service.consultarTodosJogadores();
    } finally {
      channel.ack(originalMessage);
    }
  }

  @EventPattern('atualizar-jogador')
  async atualizarJogador(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    this.logger.log(`Jogador para ser atualizada: ${JSON.stringify(data)}`);
    try {
      await this.service.atualizarJogador(data.id, data.jogador);
      await channel.ack(originalMessage);
    } catch (e) {
      this.logger.error(
        `Erro ao Gravar Jogador:: ${JSON.stringify(e.message)}`,
      );
      const foundAckError = ackErrors.filter((ackErr) =>
        e.message.includes(ackErr),
      );
      if (foundAckError) {
        await channel.ack(originalMessage);
      }
    }
  }

  @EventPattern('remover-jogador')
  async removerJogador(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    this.logger.log(`Jogador para ser removido: ${JSON.stringify(data)}`);
    try {
      await this.service.removeJogadorPeloId(data.id);
      await channel.ack(originalMessage);
    } catch (e) {
      this.logger.error(
        `Erro ao Gravar Remover:: ${JSON.stringify(e.message)}`,
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

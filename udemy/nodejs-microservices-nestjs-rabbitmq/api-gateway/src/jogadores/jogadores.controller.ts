import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ValidacaoParametrosPipe } from 'src/pipes/validacao-parametros.pipe';
import { AtualizarJogadorDto } from './dto/atualizar-jogador.dto';
import { CriarJogadorDto } from './dto/criar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
  private logger: Logger;
  private clientAdminBackend: ClientProxy;

  constructor() {
    this.logger = new Logger(JogadoresController.name);
    this.clientAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL],
        queue: process.env.RABBITMQ_QUEUE_ADMIN,
      },
    });
  }

  @Get()
  consultarJogadores(@Query('id') id: string) {
    console.log('aqui', id);
    return this.clientAdminBackend.send('consultar-jogadores', { id });
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(@Body() criarJogadorDto: CriarJogadorDto) {

    const categoria = await this.clientAdminBackend.send('consultar-categoria', criarJogadorDto.categoria).toPromise();

    if(!categoria) {
      throw new BadRequestException('Categoria Invalida para Jogador!');
    }

    this.clientAdminBackend.emit('criar-jogador', criarJogadorDto);
  }

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async atualizarJogador(
    @Param('_id', ValidacaoParametrosPipe) id: string,
    @Body() atualizarJogadorDto: AtualizarJogadorDto,
  ) {
    this.clientAdminBackend.emit('atualizar-jogador', {
      id,
      jogador: atualizarJogadorDto,
    });
  }

  @Delete('/:_id')
  async removerJogador(@Param('_id', ValidacaoParametrosPipe) id: string) {
    this.clientAdminBackend.emit('remover-jogador', { id });
  }
}

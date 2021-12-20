import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';
import { ValidacaoParametrosPipe } from 'src/pipes/validacao-parametros.pipe';
import { GoogleStorageService } from 'src/storage/google-storage.service';
import { AtualizarJogadorDto } from './dto/atualizar-jogador.dto';
import { CriarJogadorDto } from './dto/criar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
  private logger: Logger;
  private clientAdminBackend: ClientProxy;

  constructor(
    private readonly uploadFileService: GoogleStorageService,
    private readonly config: ConfigService,
  ) {
    this.logger = new Logger(JogadoresController.name);
    this.clientAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [config.get('RABBITMQ_URL')],
        queue: config.get('RABBITMQ_QUEUE_ADMIN'),
      },
    });
  }

  @Get()
  consultarJogadores(@Query('id') id: string) {
    return this.clientAdminBackend.send('consultar-jogadores', { id });
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    const categoria = await this.clientAdminBackend
      .send('consultar-categorias', criarJogadorDto.categoria)
      .toPromise();

    if (!categoria) {
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
    const categoria = await this.clientAdminBackend
      .send('consultar-categorias', atualizarJogadorDto.categoria)
      .toPromise();

    if (!categoria) {
      throw new BadRequestException('Categoria Invalida para Jogador!');
    }

    this.clientAdminBackend.emit('atualizar-jogador', {
      id,
      jogador: atualizarJogadorDto,
    });
  }

  @Delete('/:_id')
  async removerJogador(@Param('_id', ValidacaoParametrosPipe) id: string) {
    this.clientAdminBackend.emit('remover-jogador', { id });
  }

  @Patch('/:_id/avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  async carregarAvavar(
    @Param('_id', ValidacaoParametrosPipe) id: string,
    @UploadedFile() file,
  ) {
    const jogador = await this.clientAdminBackend.send('consultar-jogadores', {
      id,
    });

    if (!jogador) {
      throw new BadRequestException('Invalid id');
    }

    const url = await this.uploadFileService.uploadFile(file, id);

    const atualizarJogadorDto: AtualizarJogadorDto = {
      urlFotoJogador: url,
    };

    this.clientAdminBackend.emit('atualizar-jogador', {
      id,
      jogador: atualizarJogadorDto,
    });
  }
}

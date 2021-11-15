import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AtualizarJogadorDto } from './dto/atualizar-jogador.dto';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros-pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private jogadoresService: JogadoresService) {}

  @Get()
  consultarJogadores() {
    return this.jogadoresService.consultarTodosJogadores();
  }

  @Get('/:_id')
  consultarJogadorPeloId(
    @Param('_id', JogadoresValidacaoParametrosPipe) id: string,
  ) {
    return this.jogadoresService.consultarJogadorPeloId(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    await this.jogadoresService.criarJogador(criarJogadorDto);
  }

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async atualizarJogador(
    @Param('_id', JogadoresValidacaoParametrosPipe) id: string,
    @Body() atualizarJogadorDto: AtualizarJogadorDto,
  ) {
    await this.jogadoresService.atualizarJogador(id, atualizarJogadorDto);
  }

  @Delete('/:_id')
  async removerJogador(
    @Param('_id', JogadoresValidacaoParametrosPipe) id: string,
  ) {
    this.jogadoresService.removeJogadorPeloId(id);
  }
}

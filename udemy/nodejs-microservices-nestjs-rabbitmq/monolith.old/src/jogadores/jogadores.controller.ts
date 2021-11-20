import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ValidacaoParametrosPipe } from 'src/common/pipes/validacao-parametros.pipe';
import { AtualizarJogadorDto } from './dto/atualizar-jogador.dto';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private jogadoresService: JogadoresService) {}

  @Get()
  consultarJogadores() {
    return this.jogadoresService.consultarTodosJogadores();
  }

  @Get('/:_id')
  consultarJogadorPeloId(@Param('_id', ValidacaoParametrosPipe) id: string) {
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
    @Param('_id', ValidacaoParametrosPipe) id: string,
    @Body() atualizarJogadorDto: AtualizarJogadorDto,
  ) {
    await this.jogadoresService.atualizarJogador(id, atualizarJogadorDto);
  }

  @Delete('/:_id')
  async removerJogador(@Param('_id', ValidacaoParametrosPipe) id: string) {
    this.jogadoresService.removeJogadorPeloId(id);
  }
}

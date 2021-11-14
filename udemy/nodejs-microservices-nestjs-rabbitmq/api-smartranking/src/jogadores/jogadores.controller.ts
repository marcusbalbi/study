import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros-pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private jogadoresService: JogadoresService) {}

  @Get()
  consultarJogadores(
    @Query('email', JogadoresValidacaoParametrosPipe) email: string,
  ) {
    if (email) {
      return this.jogadoresService.consultarJogadoresPeloEmail(email);
    }
    return this.jogadoresService.consultarTodosJogadores();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    await this.jogadoresService.criarAtualizarJogador(criarJogadorDto);
  }

  @Delete()
  async removerJogador(
    @Query('email', JogadoresValidacaoParametrosPipe) email: string,
  ) {
    this.jogadoresService.removeJogadorPeloEmail(email);
  }
}

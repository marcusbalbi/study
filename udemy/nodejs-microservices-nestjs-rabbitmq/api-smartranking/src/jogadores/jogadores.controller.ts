import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private jogadoresService: JogadoresService) {}

  @Get()
  consultarJogadores(@Query('email') email: string) {
    if (email) {
      return this.jogadoresService.consultarJogadoresPeloEmail(email);
    }
    return this.jogadoresService.consultarTodosJogadores();
  }

  @Post()
  async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
    await this.jogadoresService.criarAtualizarJogador(criarJogadorDto);
  }

  @Delete()
  async removerJogador(@Query('email') email: string) {
    this.jogadoresService.removeJogadorPeloEmail(email);
  }
}

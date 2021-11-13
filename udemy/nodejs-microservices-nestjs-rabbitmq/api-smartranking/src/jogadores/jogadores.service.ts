import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { Jogador } from './interfaces/Jogador.interface';
import { v4 as uuidV4 } from 'uuid';
@Injectable()
export class JogadoresService {
  private readonly logger: Logger;
  private jogadores: Array<Jogador> = [];

  public constructor() {
    this.logger = new Logger(JogadoresService.name);
  }

  obterTodos() {
    return this.jogadores;
  }

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`Cria jogador: ${criarJogadorDto.nome}`);
    this.criar(criarJogadorDto);
  }

  private criar(dto: CriarJogadorDto): void {
    const { nome, telefoneCelular, email } = dto;

    const jogador = {
      _id: uuidV4(),
      nome,
      telefoneCelular,
      email,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: 'www.google.com.br',
    };

    this.jogadores.push(jogador);
  }
}

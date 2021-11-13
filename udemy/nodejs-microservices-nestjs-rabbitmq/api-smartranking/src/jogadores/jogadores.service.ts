import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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

  async consultarTodosJogadores(): Promise<Jogador[]> {
    return this.jogadores;
  }

  async consultarJogadoresPeloEmail(email: string): Promise<Jogador> {
    const jogador = this.jogadores.find((jogador) => jogador.email === email);

    if (!jogador) {
      throw new NotFoundException(
        `Jogador como email ${email} não foi encontrado`,
      );
    }

    return jogador;
  }

  async removeJogadorPeloEmail(email: string) {
    this.jogadores = this.jogadores.filter(
      (jogador) => jogador.email !== email,
    );
  }

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`Cria jogador: ${criarJogadorDto.nome}`);
    const { email } = criarJogadorDto;

    const jogadorEncontrado = this.jogadores.find(
      (jogador) => jogador.email === email,
    );

    if (jogadorEncontrado) {
      return this.atualizar(jogadorEncontrado, criarJogadorDto);
    }

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

  private atualizar(jogadorEncontrado: Jogador, dto: CriarJogadorDto): void {
    jogadorEncontrado.nome = dto.nome;

    return;
  }
}

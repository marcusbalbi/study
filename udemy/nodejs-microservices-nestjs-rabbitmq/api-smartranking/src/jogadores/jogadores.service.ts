import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dto/criar-jogador.dto';
import { Jogador } from './interfaces/Jogador.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class JogadoresService {
  private readonly logger: Logger;

  public constructor(
    @InjectModel('Jogador') private jogadorModel: Model<Jogador>,
  ) {
    this.logger = new Logger(JogadoresService.name);
  }

  async consultarTodosJogadores(): Promise<Jogador[]> {
    return this.jogadorModel.find().exec();
  }

  async consultarJogadoresPeloEmail(email: string): Promise<Jogador> {
    const jogador = await this.jogadorModel.findOne({ email }).exec();

    if (!jogador) {
      throw new NotFoundException(
        `Jogador como email ${email} não foi encontrado`,
      );
    }

    return jogador;
  }

  async removeJogadorPeloEmail(email: string) {
    return this.jogadorModel.deleteOne({ email }).exec();
  }

  async criarAtualizarJogador(
    criarJogadorDto: CriarJogadorDto,
  ): Promise<Jogador> {
    this.logger.log(`Cria jogador: ${criarJogadorDto.nome}`);
    const { email } = criarJogadorDto;

    const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();

    if (jogadorEncontrado) {
      return this.atualizar(criarJogadorDto);
    }

    return this.criar(criarJogadorDto);
  }

  private criar(dto: CriarJogadorDto): Promise<Jogador> {
    const jogadorCriado = new this.jogadorModel(dto);

    return jogadorCriado.save();
  }

  private atualizar(dto: CriarJogadorDto): Promise<Jogador> {
    return this.jogadorModel
      .findOneAndUpdate({ email: dto.email }, { $set: dto })
      .exec();
  }
}

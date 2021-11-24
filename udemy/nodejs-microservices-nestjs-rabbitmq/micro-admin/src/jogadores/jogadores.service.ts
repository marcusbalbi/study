import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jogador } from './Jogador.interface';
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

  async criarJogador(criarJogadorDto: Jogador): Promise<Jogador> {
    this.logger.log(`Cria jogador: ${criarJogadorDto.nome}`);
    const { email } = criarJogadorDto;

    const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();

    if (jogadorEncontrado) {
      throw new BadRequestException('Email ja está em uso por outro jogador!');
    }

    const jogadorCriado = new this.jogadorModel(criarJogadorDto);

    return jogadorCriado.save();
  }

  async atualizarJogador(
    id: string,
    atualizarJogadorDto: Jogador,
  ): Promise<Jogador> {
    const jogadorEncontrado = await this.jogadorModel.findById(id).exec();

    if (!jogadorEncontrado) {
      throw new NotFoundException('Jogador não encontrado!');
    }
    return this.jogadorModel
      .findByIdAndUpdate(id, { $set: atualizarJogadorDto })
      .exec();
  }

  async consultarJogadorPeloId(_id: string) {
    const jogador = await this.jogadorModel.findOne({ _id }).exec();

    if (!jogador) {
      throw new NotFoundException(`Jogador com o id ${_id} não foi encontrado`);
    }

    return jogador;
  }

  removeJogadorPeloId(_id: string) {
    return this.jogadorModel.deleteOne({ _id }).exec();
  }
}

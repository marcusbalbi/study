import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { AtualizarCategoriaDto } from './dto/AtualizarCategoriaDto';
import { CriarCategoriaDto } from './dto/CriarCatregoriaDto';
import { Categoria } from './interfaces/categoria.interface';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>,
    private readonly jogadoresService: JogadoresService,
  ) {}

  async consultarCategoriaDoJogador(idJogador: any): Promise<Categoria> {
    //await this.jogadoresService.consultarJogadorPeloId(idJogador)

    const jogadores = await this.jogadoresService.consultarTodosJogadores();

    const jogadorFilter = jogadores.filter(
      (jogador) => jogador._id == idJogador,
    );

    if (jogadorFilter.length == 0) {
      throw new BadRequestException(`O id ${idJogador} não é um jogador!`);
    }

    return await this.categoriaModel
      .findOne()
      .where('jogadores')
      .in(idJogador)
      .exec();
  }

  async criarCategoria(
    criarCategoriaDto: CriarCategoriaDto,
  ): Promise<Categoria> {
    const { categoria } = criarCategoriaDto;

    const categoriaEncontrada = await this.categoriaModel
      .findOne({ categoria })
      .exec();

    if (categoriaEncontrada) {
      throw new BadRequestException(`Categoria ${categoria} já Cadastrada`);
    }

    const categoriaCriada = new this.categoriaModel(criarCategoriaDto);

    return categoriaCriada.save();
  }

  async consultarTodasCategorias(): Promise<Categoria[]> {
    return this.categoriaModel.find().populate('jogadores').exec();
  }

  async consultarCategoriaPeloId(id: string): Promise<Categoria> {
    try {
      const categoria = await this.categoriaModel.findOne({ _id: id }).exec();

      if (!categoria) {
        throw new NotFoundException(`Categoria com o id ${id} não encontrada!`);
      }

      return categoria;
    } catch (e) {
      throw new NotFoundException(`Categoria com o id ${id} não encontrada!`);
    }
  }
  async atualizarCategoria(
    id: string,
    atualizarCategoriDto: AtualizarCategoriaDto,
  ) {
    try {
      const categoria = await this.categoriaModel.findOne({ _id: id }).exec();

      if (!categoria) {
        throw new NotFoundException(`Categoria com o id ${id} não encontrada!`);
      }

      return this.categoriaModel
        .findOneAndUpdate({ _id: id }, { $set: atualizarCategoriDto })
        .exec();
    } catch (e) {
      throw new NotFoundException(`Categoria com o id ${id} não encontrada!`);
    }
  }

  async atribuirJogador(id: string, idJogador: string) {
    try {
      const categoria = await this.categoriaModel.findOne({ _id: id }).exec();

      if (!categoria) {
        throw new BadRequestException(
          `Categoria com o id ${id} não encontrada!`,
        );
      }

      const jogador = await this.jogadoresService.consultarJogadorPeloId(
        idJogador,
      );

      if (!jogador) {
        throw new BadRequestException(
          `jogador com o id ${idJogador} não encontrado!`,
        );
      }

      const jogadorJaNacategoria = await this.categoriaModel
        .find({ _id: id })
        .where('jogadores')
        .in([idJogador])
        .exec();

      if (jogadorJaNacategoria.length > 0) {
        throw new BadRequestException('Jogador já incluido na categoria');
      }

      categoria.jogadores.push(jogador);

      await this.categoriaModel
        .findOneAndUpdate({ _id: id }, { $set: categoria })
        .exec();
    } catch (e) {
      throw e;
    }
  }
}

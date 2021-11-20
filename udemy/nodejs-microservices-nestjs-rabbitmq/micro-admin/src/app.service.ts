import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categoria } from './interfaces/categorias/categoria.interface';
import { Jogador } from './interfaces/jogadores/Jogador.interface';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);

  constructor(
    @InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>,
    @InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>,
  ) {}
  async criarCategoria(data: Categoria): Promise<Categoria> {
    try {
      const { categoria } = data;

      const categoriaEncontrada = await this.categoriaModel
        .findOne({ categoria })
        .exec();

      if (categoriaEncontrada) {
        throw new BadRequestException(`Categoria ${categoria} já Cadastrada`);
      }

      const categoriaCriada = new this.categoriaModel(data);

      return categoriaCriada.save();
    } catch (e) {
      this.logger.error(`error: ${JSON.stringify(e.message)}`);
      throw new RpcException(e.message);
    }
  }

  async consultarTodasCategorias(): Promise<Categoria[]> {
    return this.categoriaModel.find().populate('jogadores').exec();
  }

  async atualizarCategoria(id: string, categoria: Categoria) {
    try {
      const categoriaEncontrada = await this.categoriaModel.findOne({ _id: id }).exec();

      if (!categoriaEncontrada) {
        throw new RpcException(`Categoria com o id ${id} não encontrada!`);
      }

      return this.categoriaModel
        .findOneAndUpdate({ _id: id }, { $set: categoria })
        .exec();
    } catch (e) {
      throw new RpcException(e.message);
    }
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
}

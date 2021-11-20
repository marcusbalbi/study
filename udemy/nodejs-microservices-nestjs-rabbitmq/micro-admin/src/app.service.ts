import { BadRequestException, Injectable, Logger } from '@nestjs/common';
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
}

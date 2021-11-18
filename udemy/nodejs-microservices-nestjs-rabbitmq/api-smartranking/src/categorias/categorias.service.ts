import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarCategoriaDto } from './dto/CriarCatregoriaDto';
import { Categoria } from './interfaces/categoria.interface';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel('Categoria') private categoriaModel: Model<Categoria>,
  ) {}
  criarCategoria(criarCategoriaDto: CriarCategoriaDto): Promise<Categoria> {
    const { categoria } = criarCategoriaDto;

    const categoriaEncontrada = this.categoriaModel
      .findOne({ categoria })
      .exec();

    if (categoriaEncontrada) {
      throw new BadRequestException(`Categoria ${categoria} já Cadastrada`);
    }

    const categoriaCriada = new this.categoriaModel(criarCategoriaDto);

    return categoriaCriada.save();
  }

  async consultarTodasCategorias(): Promise<Categoria[]> {
    return this.categoriaModel.find().exec();
  }

  async consultarCategoriaPeloId(id: string): Promise<Categoria> {
    const categoria = await this.categoriaModel.findOne({ _id: id }).exec();

    if (!categoria) {
      throw new NotFoundException(`Categoria com o id ${id} não encontrada!`);
    }

    return categoria;
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadorSchema } from 'src/jogadores/jogador.schema';
import { CategoriaSchema } from './categoria.schema';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Categoria', schema: CategoriaSchema },
      { name: 'Jogador', schema: JogadorSchema },
    ]),
  ],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}

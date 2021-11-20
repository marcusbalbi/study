import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadorSchema } from 'src/jogadores/interfaces/jogador.schema';
import { JogadoresModule } from 'src/jogadores/jogadores.module';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { CategoriaSchema } from './interfaces/categoria.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Categoria', schema: CategoriaSchema },
      { name: 'Jogador', schema: JogadorSchema },
    ]),
    JogadoresModule,
  ],
  exports: [CategoriasService],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}

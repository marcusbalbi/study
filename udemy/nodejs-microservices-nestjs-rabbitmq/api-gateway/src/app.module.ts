import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [JogadoresModule, CategoriasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

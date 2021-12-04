import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [JogadoresModule, CategoriasModule, StorageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

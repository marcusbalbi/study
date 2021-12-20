import { Module } from '@nestjs/common';
import { StorageModule } from 'src/storage/storage.module';
import { JogadoresController } from './jogadores.controller';

@Module({
  imports: [StorageModule],
  controllers: [JogadoresController],
})
export class JogadoresModule {}

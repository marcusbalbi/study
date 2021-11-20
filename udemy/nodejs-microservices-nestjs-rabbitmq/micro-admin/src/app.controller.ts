import { Controller, Get, Logger, Param } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Categoria } from './interfaces/categorias/categoria.interface';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @EventPattern('criar-categoria')
  async criarCategoria(@Payload() categoria: Categoria) {
    this.logger.log(`Categoria Recebida: ${JSON.stringify(categoria)}`);
    this.appService.criarCategoria(categoria);
  }

  @MessagePattern('consultar-categorias')
  consultarCategorias(@Payload() data) {
    if (data.id) {
      return this.appService.consultarCategoriaPeloId(data.id);
    }

    return this.appService.consultarTodasCategorias();
  }
}

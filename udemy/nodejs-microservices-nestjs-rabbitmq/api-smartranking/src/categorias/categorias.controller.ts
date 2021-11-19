import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dto/AtualizarCategoriaDto';
import { CriarCategoriaDto } from './dto/CriarCatregoriaDto';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarCategoria(@Body() criarCategoriaDto: CriarCategoriaDto) {
    /**
     * exemplo
     * {
        "categoria": "A",
        "descricao": "Categoria A",
        "Eventos": [
          {
            "nome": "VITORIA",
            "operacao": "+",
            "valor": 30
          },
            {
            "nome": "VITORIA_LIDER",
            "operacao": "+",
            "valor": 50
          },
            {
            "nome": "DERROTA",
            "operacao": "+",
            "valor": 0
          }
        ]
        }
     */
    return this.categoriasService.criarCategoria(criarCategoriaDto);
  }

  @Get()
  async consultarCategorias() {
    return this.categoriasService.consultarTodasCategorias();
  }

  @Get('/:id')
  async consultarCategoriaPeloId(@Param('id') id: string) {
    return this.categoriasService.consultarCategoriaPeloId(id);
  }

  @Put('/:id')
  async atualizarCategoria(
    @Param('id') id: string,
    @Body() atualizarCategoriDto: AtualizarCategoriaDto,
  ) {
    return this.categoriasService.atualizarCategoria(id, atualizarCategoriDto);
  }
}

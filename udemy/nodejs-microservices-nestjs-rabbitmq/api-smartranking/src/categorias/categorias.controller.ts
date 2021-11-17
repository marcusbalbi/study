import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
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
}

import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';

export interface Evento {
  nome: string;
  operacao: string;
  valor: number;
}

export class CriarCategoriaDto {
  @IsString()
  @IsNotEmpty()
  readonly categoria: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Evento>;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class AtualizarJogadorDto {
  @IsNotEmpty()
  readonly telefoneCelular: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;
}

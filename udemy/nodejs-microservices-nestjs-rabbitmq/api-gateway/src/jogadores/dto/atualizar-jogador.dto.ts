import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AtualizarJogadorDto {
  @IsNotEmpty()
  @IsOptional()
  readonly telefoneCelular?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  categoria?: string;

  @IsOptional()
  urlFotoJogador?: string;
}

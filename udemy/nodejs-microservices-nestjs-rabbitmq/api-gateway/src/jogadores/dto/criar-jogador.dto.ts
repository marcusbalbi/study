import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CriarJogadorDto {
  readonly telefoneCelular: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;
}

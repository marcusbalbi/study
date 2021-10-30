import { Expose, Transform } from 'class-transformer';
import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class getEstimatesDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @Transform(({ value }) => parseInt(value))
  @Min(1930)
  @Max(2050)
  @IsNumber()
  year: number;

  @Transform(({ value }) => parseInt(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => parseInt(value))
  @IsLatitude()
  lat: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;
}

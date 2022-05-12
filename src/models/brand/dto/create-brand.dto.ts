import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CarDto {
  @IsOptional()
  id?: number;

  @IsOptional()
  carName?: string;

  @IsString()
  @IsOptional()
  weight?: string;

  @IsString()
  @IsOptional()
  color?: string;
}

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  brandName: string;

  @IsOptional()
  cars?: CarDto[];
}

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  carName: string;

  @IsString()
  @IsNotEmpty()
  weight: string;

  @IsString()
  @IsNotEmpty()
  color: string;
}

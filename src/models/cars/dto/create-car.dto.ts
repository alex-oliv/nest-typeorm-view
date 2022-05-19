import { IsNotEmpty } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  carName: string;

  @IsNotEmpty()
  weight: string;

  @IsNotEmpty()
  color: string;
}

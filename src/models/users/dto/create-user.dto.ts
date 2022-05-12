import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9._]*$/, {
    message: 'Username must contain numbers, uppercase, lowcase, _ or .',
  })
  @MaxLength(30)
  username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsEmail,
  IsString,
  Matches,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Unique } from 'typeorm';

@InputType()
export class RegisterUserInput {
  @IsEmail()
  @Unique(['email']) // Indica que el campo debe ser único en la columna "email"
  @Field()
  email: string;

  @IsString()
  @Field()
  fullname: string;

  @IsNotEmpty()
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  @MinLength(6)
  @MaxLength(50)
  @Field()
  password: string;
}

import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  fullname: string;

  @IsNotEmpty()
  @Field()
  password: string;
}

import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsPositive } from 'class-validator';

@InputType()
export class CreateCarritoInput {
  @IsInt()
  @IsPositive()
  @Field()
  idUser: number;
}

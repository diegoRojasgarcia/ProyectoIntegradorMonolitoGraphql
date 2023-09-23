import { Field, InputType } from '@nestjs/graphql';
import {
  IsIn,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateIngredientInput {
  @IsString()
  @Field()
  @MinLength(1)
  name: string;

  @IsString()
  @Field()
  description: string;

  @Field()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsPositive()
  @IsInt()
  @Field()
  stock: number;

  @IsIn(['available', 'out of stock'])
  state: string;
}

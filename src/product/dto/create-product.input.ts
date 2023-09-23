import { Field, InputType } from '@nestjs/graphql';
import {
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateProductDto {
  @IsString()
  @Field()
  @MinLength(1)
  name: string;

  @IsString()
  @Field()
  description: string;

  @IsOptional()
  @Field()
  @IsNumber()
  @IsPositive()
  rank: number;

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

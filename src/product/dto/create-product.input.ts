import { Field, InputType } from '@nestjs/graphql';
import {
  IsIn,
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
  @IsNumber()
  @IsPositive()
  @Field()
  rank: number;

  @IsNumber()
  @IsPositive()
  @Field()
  price: number;

  @IsIn(['available', 'out of stock'])
  @Field()
  state: string;

  @IsString()
  @Field()
  image: string;
}

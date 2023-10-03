import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

@InputType()
export class CreateLineaproductoInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  idCarrito: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  idProduct: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  cant: number;
}

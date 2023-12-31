import { CreateProductDto } from './create-product.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProductInput extends PartialType(CreateProductDto) {
  id: number;
}

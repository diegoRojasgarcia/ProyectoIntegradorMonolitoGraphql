import { CreateCarritoInput } from './create-carrito.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCarritoInput extends PartialType(CreateCarritoInput) {
  id: number;
}

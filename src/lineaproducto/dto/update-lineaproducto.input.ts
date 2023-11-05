import { CreateLineaproductoInput } from './create-lineaproducto.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLineaproductoInput extends PartialType(
  CreateLineaproductoInput,
) {
  id: number;
}

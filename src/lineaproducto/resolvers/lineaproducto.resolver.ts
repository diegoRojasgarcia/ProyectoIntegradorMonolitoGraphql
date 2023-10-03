import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LineaproductoService } from '../services/lineaproducto.service';
import { CreateLineaproductoInput } from '../dto/create-lineaproducto.input';
import { Lineaproducto } from '../entities/lineaproducto.entity';

@Resolver('Lineaproducto')
export class LineaproductoResolver {
  constructor(private readonly lineaproductoService: LineaproductoService) {}

  @Mutation(() => Lineaproducto)
  createLineProduct(
    @Args('createLineaproductoInput')
    createLineaproductoInput: CreateLineaproductoInput,
  ) {
    return this.lineaproductoService.createLineProduct(
      createLineaproductoInput,
    );
  }

  @Query(() => Lineaproducto)
  findLineProductById(@Args('id') id: number) {
    return this.lineaproductoService.findById(id);
  }
}

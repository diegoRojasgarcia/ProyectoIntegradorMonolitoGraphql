import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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

  @Mutation(() => Lineaproducto)
  async editLineProductQuantity(
    @Args('id') id: number,
    @Args('newQuantity') newQuantity: number,
  ) {
    return this.lineaproductoService.editProductLineQuantity(id, newQuantity);
  }

  @Mutation(() => Boolean)
  async deleteLineProduct(@Args('id') id: number) {
    await this.lineaproductoService.deleteProductLine(id);
    return true;
  }

  @Query(() => [Lineaproducto], { name: 'findAllLineProductsInCart' })
  findAllLineProductsInCart(
    @Args('cartId', { type: () => Int }) cartId: number,
  ): Promise<Lineaproducto[]> {
    return this.lineaproductoService.findAllByCartId(cartId);
  }
}

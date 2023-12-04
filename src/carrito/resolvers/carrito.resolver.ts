import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarritoService } from '../services/carrito.service';
import { CreateCarritoInput } from '../dto/create-carrito.input';
import { UpdateCarritoInput } from '../dto/update-carrito.input';
import { Carrito } from '../entities/carrito.entity';

@Resolver('Carrito')
export class CarritoResolver {
  constructor(private readonly carritoService: CarritoService) {}

  @Mutation(() => Carrito)
  createCarrito(
    @Args('createCarritoInput') createCarritoInput: CreateCarritoInput,
  ) {
    return this.carritoService.createCarrito(createCarritoInput);
  }

  // @Query('carrito')
  // findAll() {
  //   return this.carritoService.findAll();
  // }

  @Query(() => Carrito)
  findCarritoById(@Args('id') id: number) {
    return this.carritoService.findById(id);
  }

  @Query(() => String)
  getCarritoState(@Args('id', { type: () => Int }) id: number) {
    return this.carritoService.getCarritoState(id);
  }
  // @Mutation('updateCarrito')
  // update(@Args('updateCarritoInput') updateCarritoInput: UpdateCarritoInput) {
  //   return this.carritoService.update(updateCarritoInput.id, updateCarritoInput);
  // }

  // @Mutation('removeCarrito')
  // remove(@Args('id') id: number) {
  //   return this.carritoService.remove(id);
  // }
}

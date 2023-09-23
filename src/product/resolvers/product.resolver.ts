import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dto/create-product.input';
import { Product } from '../entities/product.entity';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  // @Mutation('createProduct')
  // create(@Args('createProductInput') createProductInput: CreateProductInput) {
  //   return this.productService.create(createProductInput);
  // }

  @Query(() => [Product])
  products() {
    return this.productService.findAll();
  }

  // @Query('product')
  // findOne(@Args('id') id: number) {
  //   return this.productService.findOne(id);
  // }

  // @Mutation('updateProduct')
  // update(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
  //   return this.productService.update(updateProductInput.id, updateProductInput);
  // }

  // @Mutation('removeProduct')
  // remove(@Args('id') id: number) {
  //   return this.productService.remove(id);
  // }
}

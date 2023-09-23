import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IngredientService } from '../services/ingredient.service';
import { CreateIngredientInput } from '../dto/create-ingredient.input';
import { Ingredient } from '../entities/ingredient.entity';

@Resolver('Ingredient')
export class IngredientResolver {
  constructor(private readonly ingredientService: IngredientService) {}

  @Mutation(() => Ingredient)
  createIngredient(
    @Args('createIngredientInput') createIngredientInput: CreateIngredientInput,
  ) {
    return this.ingredientService.create(createIngredientInput);
  }

  // @Query('ingredient')
  // findAll() {
  //   return this.ingredientService.findAll();
  // }

  // @Query('ingredient')
  // findOne(@Args('id') id: number) {
  //   return this.ingredientService.findOne(id);
  // }

  // @Mutation('updateIngredient')
  // update(@Args('updateIngredientInput') updateIngredientInput: UpdateIngredientInput) {
  //   return this.ingredientService.update(updateIngredientInput.id, updateIngredientInput);
  // }

  // @Mutation('removeIngredient')
  // remove(@Args('id') id: number) {
  //   return this.ingredientService.remove(id);
  // }
}

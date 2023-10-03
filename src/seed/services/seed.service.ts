import { Injectable } from '@nestjs/common';
import { ProductService } from 'src/product/services/product.service';
import { initialDataProduct } from '../data/seedProduct-data';
import { initialDataIngredients } from '../data/seedIngredients-data';
import { IngredientService } from 'src/ingredient/services/ingredient.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly productsService: ProductService,
    private readonly ingredientService: IngredientService,
  ) {}

  async runSeedProduct() {
    await this.insertProducts();
    return 'SEED EXECUTED';
  }

  async runSeedIngredient() {
    await this.insertIngredients();
    return 'SEED EXECUTED';
  }

  private async insertProducts() {
    const products = initialDataProduct.products;
    const insertPromises = [];
    products.forEach((product) => {
      const ingredients = product.ingredients;
      ingredients.forEach(async (ingredient) => {
        const ingredientbd = await this.ingredientService.findById(
          ingredient.id,
        );
        if (ingredientbd) {
          product.ingredients.push(ingredientbd);
        }
      });
      insertPromises.push(this.productsService.create(product));
    });
    await Promise.all(insertPromises);
    return true;
  }

  private async insertIngredients() {
    const ingredients = initialDataIngredients.Ingredients;
    const insertPromises = [];
    ingredients.forEach((ingredient) => {
      insertPromises.push(this.ingredientService.create(ingredient));
    });
    await Promise.all(insertPromises);
    return true;
  }
}

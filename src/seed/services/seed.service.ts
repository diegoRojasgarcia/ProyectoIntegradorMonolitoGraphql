import { Injectable } from '@nestjs/common';
import { ProductService } from 'src/product/services/product.service';
import { initialData } from '../data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductService) {}

  async runSeed() {
    await this.insertNewProducts();
    return 'SEED EXECUTED';
  }

  private async insertNewProducts() {
    // await this.productsService.deleteAllProducts();

    const products = initialData.products;

    const insertPromises = [];

    products.forEach((product) => {
      insertPromises.push(this.productsService.create(product));
    });

    await Promise.all(insertPromises);

    return true;
  }
}

import { Module } from '@nestjs/common';
import { SeedService } from './services/seed.service';
import { SeedResolver } from './resolvers/seed.resolver';
import { ProductModule } from 'src/product/product.module';
import { IngredientModule } from 'src/ingredient/ingredient.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [ProductModule, IngredientModule],
})
export class SeedModule {}

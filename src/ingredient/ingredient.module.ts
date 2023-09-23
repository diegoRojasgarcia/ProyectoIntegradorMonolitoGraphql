import { Module } from '@nestjs/common';
import { IngredientService } from './services/ingredient.service';
import { IngredientResolver } from './resolvers/ingredient.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  providers: [IngredientResolver, IngredientService],
})
export class IngredientModule {}

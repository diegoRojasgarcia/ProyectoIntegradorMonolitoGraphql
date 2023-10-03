import { Resolver, Mutation } from '@nestjs/graphql';
import { SeedService } from '../services/seed.service';

@Resolver()
export class SeedResolver {
  constructor(private seedService: SeedService) {}

  @Mutation(() => String)
  executeSeedProduct() {
    return this.seedService.runSeedProduct();
  }

  @Mutation(() => String)
  executeSeedIngredient() {
    return this.seedService.runSeedIngredient();
  }
}

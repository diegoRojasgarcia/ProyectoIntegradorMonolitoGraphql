import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateIngredientInput } from '../dto/create-ingredient.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '../entities/ingredient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(
    createIngredientInput: CreateIngredientInput,
  ): Promise<Ingredient> {
    try {
      const { name } = createIngredientInput;
      const verifyIngredient = await this.findByName(name);
      if (verifyIngredient)
        throw new HttpException(
          `Ingredient with name ${name} exists`,
          HttpStatus.BAD_REQUEST,
        );
      const newIngredient = this.ingredientRepository.create(
        createIngredientInput,
      );
      await this.ingredientRepository.save(newIngredient);
      return await this.findByName(newIngredient.name);
    } catch (error) {
      throw error;
    }
  }

  async findByName(name: string): Promise<Ingredient> {
    try {
      return await this.ingredientRepository.findOne({
        where: {
          name,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  // findAll() {
  //   return `This action returns all ingredient`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} ingredient`;
  // }

  // update(id: number, updateIngredientInput: UpdateIngredientInput) {
  //   return `This action updates a #${id} ingredient`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} ingredient`;
  // }
}

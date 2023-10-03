import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.input';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    try {
      return await this.productRepository.find({ relations: ['ingredients'] });
    } catch (error) {
      throw error;
    }
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const { name } = createProductDto;
      const verifyProduct = await this.findByName(name);
      if (verifyProduct)
        throw new HttpException(
          `Product with name ${name} exists`,
          HttpStatus.BAD_REQUEST,
        );
      const newProduct = this.productRepository.create(createProductDto);
      await this.productRepository.save(newProduct);
      return await this.findByName(newProduct.name);
    } catch (error) {
      throw error;
    }
  }

  async findByName(name: string): Promise<Product> {
    try {
      return await this.productRepository.findOne({
        where: {
          name,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<Product> {
    try {
      return await this.productRepository.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

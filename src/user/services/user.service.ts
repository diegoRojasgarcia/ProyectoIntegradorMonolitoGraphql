import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../dto/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    try {
      return await this.usersRepository.find({ relations: ['carritos'] });
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: number): Promise<Users> {
    try {
      return await this.usersRepository.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async findById(id: number): Promise<Users> {
    try {
      return await this.usersRepository.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async findByEmail(email: string): Promise<Users> {
    try {
      return await this.usersRepository.findOne({
        where: {
          email,
        },
        relations: ['carritos'],
      });
    } catch (error) {
      throw error;
    }
  }
  async createUser(createUserInput: CreateUserInput): Promise<Users> {
    try {
      const { email } = createUserInput;
      const verifyUser = await this.findByEmail(email);
      if (verifyUser)
        throw new HttpException(
          `User with email ${email} exists`,
          HttpStatus.BAD_REQUEST,
        );
      const newUser = this.usersRepository.create(createUserInput);
      await this.usersRepository.save(newUser);
      return await this.findByEmail(newUser.email);
    } catch (error) {
      throw error;
    }
  }
}

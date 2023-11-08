import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCarritoInput } from '../dto/create-carrito.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrito } from '../entities/carrito.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private carritoRepository: Repository<Carrito>,
    private readonly userService: UserService,
  ) {}

  async createCarrito(createCarritoInput: CreateCarritoInput) {
    const { idUser } = createCarritoInput;

    try {
      const userDB = await this.userService.findOneById(idUser);

      if (!userDB)
        throw new HttpException(`User not exists`, HttpStatus.BAD_REQUEST);

      const newCarrito = this.carritoRepository.create();
      newCarrito.user = userDB;
      await this.carritoRepository.save(newCarrito);
      return this.findById(newCarrito.id);
    } catch (error) {
      return error;
    }
  }

  async findById(id: number): Promise<Carrito> {
    try {
      return await this.carritoRepository.findOne({
        where: {
          id,
        },
        relations: ['lineaProducto', 'user'],
      });
    } catch (error) {
      throw error;
    }
  }

  async vaciarCarrito(id: number) {
    try {
      const carritoBD = await this.findById(id);
      const { lineaProducto, ...detailcarritoBD } = carritoBD;
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      lineaProducto.forEach((lineaproducto) => {});
    } catch (error) {
      return error;
    }
  }
}

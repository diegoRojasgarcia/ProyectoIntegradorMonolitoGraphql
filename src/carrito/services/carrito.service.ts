import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCarritoInput } from '../dto/create-carrito.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrito } from '../entities/carrito.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/services/user.service';
import { start } from 'repl';

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
      if (!userDB) {
        throw new HttpException(`User not exists`, HttpStatus.BAD_REQUEST);
      }

      // Verificar si existe un carrito activo para este usuario
      const carritoActivo = await this.carritoRepository.findOne({
        where: {
          user: userDB,
          state: 'Active',
        },
      });

      // Si ya existe un carrito activo, podrías querer manejar esta situación.
      if (carritoActivo) {
        return this.findById(carritoActivo.id);
      }

      // Crear un nuevo carrito
      const newCarrito = this.carritoRepository.create({
        user: userDB,
        state: 'Active', // Establecer el estado inicial del carrito
      });
      await this.carritoRepository.save(newCarrito);
      return this.findById(newCarrito.id);
    } catch (error) {
      throw new HttpException(
        'Error creating cart',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getCarritoState(id: number): Promise<string> {
    const carrito = await this.carritoRepository.findOne({ where: { id } });
    if (!carrito) {
      throw new Error('Carrito not found');
    }
    return carrito.state;
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
  async updateCarritoState(id: number): Promise<Carrito> {
    const carrito = await this.carritoRepository.findOne({ where: { id } });

    if (!carrito) {
      throw new HttpException('Carrito not found', HttpStatus.NOT_FOUND);
    }

    if (carrito.state !== 'Active') {
      throw new HttpException('Carrito is not active', HttpStatus.BAD_REQUEST);
    }

    carrito.state = 'Inactive'; // Cambiar el estado a 'Inactivo'
    await this.carritoRepository.save(carrito);

    return carrito;
  }
}

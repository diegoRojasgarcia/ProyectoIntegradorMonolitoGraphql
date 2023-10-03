import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateLineaproductoInput } from '../dto/create-lineaproducto.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Lineaproducto } from '../entities/lineaproducto.entity';
import { Repository } from 'typeorm';
import { ProductService } from 'src/product/services/product.service';
import { CarritoService } from 'src/carrito/services/carrito.service';

@Injectable()
export class LineaproductoService {
  constructor(
    @InjectRepository(Lineaproducto)
    private lineProductRepository: Repository<Lineaproducto>,
    private readonly productService: ProductService,
    private readonly carritoService: CarritoService,
  ) {}

  async createLineProduct(createLineaproductoInput: CreateLineaproductoInput) {
    const { idCarrito, idProduct, cant } = createLineaproductoInput;

    const promesasResueltas = await Promise.all([
      this.carritoService.findById(idCarrito),
      this.productService.findById(idProduct),
    ]);

    const carritoBd = promesasResueltas[0];

    const productBd = promesasResueltas[1];

    try {
      const newlineProduct = this.lineProductRepository.create();
      newlineProduct.subprice = cant * productBd.price;
      newlineProduct.carrito = carritoBd;
      newlineProduct.product = productBd;
      newlineProduct.cant = cant;
      const lineProduct = await this.lineProductRepository.save(newlineProduct);
      return this.findById(lineProduct.id);
    } catch (error) {
      return error;
    }
  }

  // findAll() {
  //   return `This action returns all lineaproducto`;
  // }

  async findById(id: number): Promise<Lineaproducto> {
    try {
      return await this.lineProductRepository.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  // update(id: number, updateLineaproductoInput: UpdateLineaproductoInput) {
  //   return `This action updates a #${id} lineaproducto`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} lineaproducto`;
  // }
}

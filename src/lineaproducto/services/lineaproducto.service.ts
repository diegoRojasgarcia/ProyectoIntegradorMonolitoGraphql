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

  async editProductLineQuantity(
    id: number,
    newQuantity: number,
  ): Promise<Lineaproducto> {
    const productLine = await this.findById(id);
    if (!productLine) {
      throw new HttpException('Product line not found', HttpStatus.NOT_FOUND);
    }
    const updatedPrice = newQuantity * productLine.product.price;
    productLine.cant = newQuantity;
    productLine.subprice = updatedPrice;

    return this.lineProductRepository.save(productLine);
  }

  async deleteProductLine(id: number): Promise<void> {
    const productLine = await this.findById(id);
    if (!productLine) {
      throw new HttpException('Product line not found', HttpStatus.NOT_FOUND);
    }

    await this.lineProductRepository.remove(productLine);
  }

  async findAllByCartId(cartId: number): Promise<Lineaproducto[]> {
    try {
      return await this.lineProductRepository.find({
        where: { carrito: { id: cartId } },
        relations: ['product', 'carrito'],
      });
    } catch (error) {
      throw new HttpException(
        'Error al buscar líneas de producto',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

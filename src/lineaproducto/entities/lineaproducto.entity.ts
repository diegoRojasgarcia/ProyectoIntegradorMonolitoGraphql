import { Field, ObjectType } from '@nestjs/graphql';
import { Carrito } from 'src/carrito/entities/carrito.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Lineaproducto {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @ManyToOne(() => Product, (product) => product.lineproduct, { eager: true })
  @Field(() => Product)
  product: Product;

  @Field()
  @Column()
  cant: number;

  @Field()
  @Column()
  subprice: number;

  @ManyToOne(() => Carrito, (carrito) => carrito.lineaProducto)
  carrito: Carrito;
}

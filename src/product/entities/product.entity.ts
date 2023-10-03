import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Lineaproducto } from 'src/lineaproducto/entities/lineaproducto.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  price: number;

  @Column('decimal', { precision: 6, scale: 2 })
  @Field()
  rank?: number;

  @Column()
  @Field()
  state: string;

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.products)
  @JoinTable({
    name: 'product_ingredients',
  })
  @Field(() => [Ingredient])
  ingredients: Ingredient[];

  @OneToMany(() => Lineaproducto, (lineaproducto) => lineaproducto.product) // note: we will create author property in the Photo class below
  lineproduct: Lineaproducto[];
}

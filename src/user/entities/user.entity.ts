import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Carrito } from 'src/carrito/entities/carrito.entity';

@Entity()
@ObjectType()
export class Users {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('text', { unique: true })
  @Field()
  email: string;

  @Column()
  @Field()
  fullname: string;

  @Column()
  @Field()
  password: string;

  @OneToMany(() => Carrito, (carrito) => carrito.user) // note: we will create author property in the Photo class below
  carritos: Carrito[];
}

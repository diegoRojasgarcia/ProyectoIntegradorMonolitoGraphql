import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Lineaproducto } from 'src/lineaproducto/entities/lineaproducto.entity';
import { Users } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Carrito {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({
    type: 'text',
    default: () => 'NOW()',
  })
  @Field()
  dateCreate: string;

  @ManyToOne(() => Users, (user) => user.carritos)
  @Field(() => Users)
  user: Users;

  @OneToMany(() => Lineaproducto, (lineaproducto) => lineaproducto.carrito)
  @Field(() => [Lineaproducto])
  lineaProducto?: Lineaproducto[];

  @Column({ type: 'text', default: 'Active' })
  @Field()
  state?: String;
}

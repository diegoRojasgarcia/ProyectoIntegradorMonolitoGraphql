import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

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

  @Column('decimal', { precision: 6, scale: 3 })
  @Field()
  price: number;

  @Column('decimal', { precision: 6, scale: 2 })
  @Field()
  rank?: number;

  @Column()
  @Field()
  state: string;
}

import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Users {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Column('text', { unique: true })
  @Field()
  email: string;

  @Column()
  @Field()
  fullname: string;

  @Column()
  @Field()
  password: string;
}

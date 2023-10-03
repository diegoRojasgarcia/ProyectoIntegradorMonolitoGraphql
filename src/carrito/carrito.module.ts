import { Module } from '@nestjs/common';
import { CarritoService } from './services/carrito.service';
import { CarritoResolver } from './resolvers/carrito.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito]), UserModule],
  providers: [CarritoResolver, CarritoService],
  exports: [CarritoService],
})
export class CarritoModule {}

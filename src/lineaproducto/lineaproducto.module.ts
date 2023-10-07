import { Module } from '@nestjs/common';
import { LineaproductoService } from './services/lineaproducto.service';
import { LineaproductoResolver } from './resolvers/lineaproducto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lineaproducto } from './entities/lineaproducto.entity';
import { ProductModule } from 'src/product/product.module';
import { CarritoModule } from 'src/carrito/carrito.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lineaproducto]),
    ProductModule,
    CarritoModule,
  ],
  providers: [LineaproductoResolver, LineaproductoService],
  exports: [LineaproductoService],
})
export class LineaproductoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // ◄ Importamos el módulo de TypeORM
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity'; // ◄ Importamos tu entidad Product

@Module({
  imports: [
    // Esto le avisa a TypeORM que registre la tabla de productos en este módulo
    TypeOrmModule.forFeature([Product]) 
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [TypeOrmModule] // Lo exportamos por si necesitas usarlo en otros módulos
})
export class ProductsModule {}
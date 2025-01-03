import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { Product } from './product/entities/product.entity';
import { Cart } from './cart/entities/cart.entity';
import { CartItem } from './cart-item/entities/cart-item.entity';
import { Order } from './order/entities/order.entity';
import { OrderItem } from './order-item/entities/order-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Asegúrate de que sea PostgreSQL, o el tipo que estás utilizando
      host: 'localhost',
      port: 5432,
      username: 'postgres',  // Reemplaza con tu usuario de la base de datos
      password: '1234',  // Reemplaza con tu contraseña
      database: 'minimalist-e-commerce',  // Reemplaza con el nombre de tu base de datos
      entities: [Product, Cart, CartItem, Order, OrderItem], // Aquí agregamos las entidades
      synchronize: true, // Solo para desarrollo, no usar en producción
    }),
    CartModule,
    ProductModule,
    CartItemModule,
    OrderModule,
    OrderItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
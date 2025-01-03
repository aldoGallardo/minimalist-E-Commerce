// src/order/order.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Order])], // Registra la entidad Order
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}

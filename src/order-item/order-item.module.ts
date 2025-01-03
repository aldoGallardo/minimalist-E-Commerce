// src/order-item/order-item.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { OrderItem } from './entities/order-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem])], // Registra la entidad OrderItem
  providers: [OrderItemService],
  controllers: [OrderItemController],
})
export class OrderItemModule {}

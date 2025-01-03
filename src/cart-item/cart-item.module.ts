// src/cart-item/cart-item.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { CartItem } from './entities/cart-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartItem])], // Registra la entidad CartItem
  providers: [CartItemService],
  controllers: [CartItemController],
})
export class CartItemModule {}

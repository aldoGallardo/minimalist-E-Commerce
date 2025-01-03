// src/cart/cart-item.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cart } from '../../cart/entities/cart.entity';
import { Product } from './../../product/entities/product.entity';

@Entity('items_carrito')
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, (cart) => cart.items)
  @JoinColumn({ name: 'carrito_id' })
  carrito: Cart;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'producto_id' })
  producto: Product;

  @Column({ type: 'int' })
  cantidad: number;
}

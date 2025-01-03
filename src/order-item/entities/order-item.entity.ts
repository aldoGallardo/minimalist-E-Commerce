// src/order/order-item.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './../../order/entities/order.entity';
import { Product } from './../../product/entities/product.entity';

@Entity('items_pedido')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.items)
  @JoinColumn({ name: 'pedido_id' })
  pedido: Order;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'producto_id' })
  producto: Product;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  precio_unitario: number;
}

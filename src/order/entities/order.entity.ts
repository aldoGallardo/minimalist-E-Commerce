// src/order/order.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './../../order-item/entities/order-item.entity';

@Entity('pedidos')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_pedido: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  total: number;

  @OneToMany(() => OrderItem, (item) => item.pedido)
  items: OrderItem[];
}

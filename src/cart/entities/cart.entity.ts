// src/cart/cart.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CartItem } from '../../cart-item/entities/cart-item.entity';

@Entity('carritos')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuario_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: string;

  @OneToMany(() => CartItem, (item) => item.carrito)
  items: CartItem[];
}

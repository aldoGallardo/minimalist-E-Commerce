// src/product/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('productos')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'int' })
  stock: number;
}

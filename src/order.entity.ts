import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_method: string;

  @Column()
  payment_status: string;

  @Column()
  order_status: string;

  @Column()
  created_at: string;

  @OneToMany(() => OrderItem, (i) => i.order) items: OrderItem[];
}

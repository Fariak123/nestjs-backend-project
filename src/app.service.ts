import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './order-item.entity';
import { CreateOrderDto } from './create-order.dto';
import { CreateOrderItemDto } from './create-order-item.dto';
import { UpdateOrderItemDto } from './update-order-item.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Order) private repoOrder: Repository<Order>,
    @InjectRepository(OrderItem) private repoOrderItem: Repository<OrderItem>,
  ) {}
  getHello(): string {
    return 'This nestjs app project by Fariak (Hai Bac Tran) !!';
  }
  findAllOrders(): Promise<Order[]> {
    return this.repoOrder.find();
  }
  findOrder(id: number): Promise<Order | null> {
    return this.repoOrder.findOneBy({ id: Number(id) });
  }
  postOrder(dto: CreateOrderDto): Promise<Order> {
    const order = this.repoOrder.create(dto);
    return this.repoOrder.save(order);
  }
  async deleteOrder(id: string): Promise<void> {
    await this.repoOrder.delete(id);
  }
  async findOrderItems(id: number): Promise<OrderItem[]> {
    return await this.repoOrderItem.find({
      where: {
        orderId: id,
      },
    });
  }
  findAllOrderItems(): Promise<OrderItem[]> {
    return this.repoOrderItem.find();
  }
  postOrderItem(dto: CreateOrderItemDto): Promise<OrderItem> {
    const item: OrderItem = this.repoOrderItem.create(dto);
    return this.repoOrderItem.save(item);
  }
  async deleteOrderItem(id: string): Promise<void> {
    await this.repoOrderItem.delete(id);
  }

  async updateOrderItem(id: number, dto: UpdateOrderItemDto) {
    const existing = await this.repoOrderItem.findOne({ where: { id } });
    if (!existing) throw new NotFoundException(`Order ${id} not found`);

    const merged = this.repoOrderItem.merge(existing, dto);
    return this.repoOrderItem.save(merged);
  }

  getOrderItem(id: number): Promise<OrderItem | null> {
    return this.repoOrderItem.findOne({ where: { id } });
  }
}

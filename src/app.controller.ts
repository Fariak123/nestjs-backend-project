import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './create-order.dto';
import { CreateOrderItemDto } from './create-order-item.dto';
import { OrderItem } from './order-item.entity';
import { UpdateOrderItemDto } from './update-order-item.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('orders')
  async getOrders(): Promise<Order[]> {
    return await this.appService.findAllOrders();
  }

  @Get('order/:id')
  async getOrderById(@Param('id') id: number): Promise<Order | null> {
    return this.appService.findOrder(id);
  }

  @Post('order/create')
  async createOrder(@Body() dto: CreateOrderDto): Promise<Order> {
    return this.appService.postOrder(dto);
  }

  @Delete('order/delete/:id')
  async deleteOrder(@Param('id') id: string): Promise<void> {
    await this.appService.deleteOrder(id);
  }

  @Get('orders/items')
  async getOrderItems(): Promise<OrderItem[]> {
    return await this.appService.findAllOrderItems();
  }

  @Get('order/:id/items')
  async orderItems(@Param('id') id: number): Promise<OrderItem[]> {
    return await this.appService.findOrderItems(id);
  }

  @Get('order/:id/item/:itemId')
  async getOrderItem(@Param('itemId') id: number): Promise<OrderItem | null> {
    return await this.appService.getOrderItem(id);
  }

  @Post('order/:id/item/create')
  async createOrderItem(@Body() dto: CreateOrderItemDto): Promise<OrderItem> {
    return this.appService.postOrderItem(dto);
  }

  @Delete('order/:id/item/:itemId/delete')
  async deleteOrderItem(@Param('itemId') id: string): Promise<void> {
    await this.appService.deleteOrderItem(id);
  }

  @Patch('order/:id/item/:itemId/edit')
  async update(
    @Param('itemId') id: number,
    @Body() dto: UpdateOrderItemDto,
  ): Promise<OrderItem> {
    return await this.appService.updateOrderItem(id, dto);
  }
}

import { IsNumber, IsPositive, IsInt, IsString } from 'class-validator';

export class CreateOrderItemDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsInt()
  orderId: number;
}

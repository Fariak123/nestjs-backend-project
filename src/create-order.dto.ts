import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  payment_method: string;

  @IsString()
  payment_status: string;

  @IsString()
  order_status: string;

  @IsString()
  created_at: string;
}

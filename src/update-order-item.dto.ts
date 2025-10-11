import {
  IsNumber,
  IsPositive,
  IsInt,
  IsString,
  IsOptional,
} from 'class-validator';

export class UpdateOrderItemDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  quantity: number;
}

import { IsNumber, IsString, IsArray, ArrayNotEmpty } from 'class-validator';
import { CreateOrderItemDto } from 'src/order-item/dto/create-order-item.dto';

export class CreateOrderDto {
  @IsString()
  orderDate: string;

  @IsString()
  status: string;

  @IsNumber()
  totalPrice: number;

  @IsNumber()
  customerId: number;

  @IsArray()
  @ArrayNotEmpty()
  orderItems: CreateOrderItemDto[];
}

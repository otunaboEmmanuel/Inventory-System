import { IsNumber, IsString } from 'class-validator';

export class CreateStockLogDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  previousStock: number;

  @IsNumber()
  newStock: number;

  @IsNumber()
  change: number;

  @IsString()
  action: string;
}

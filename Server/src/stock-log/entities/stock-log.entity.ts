import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class StockLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.stockLogs)
  product: Product;

  @Column('int')
  previousStock: number;

  @Column('int')
  newStock: number;

  @Column('int')
  change: number;

  @Column()
  action: string; // e.g., 'added', 'sold', 'returned'

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}

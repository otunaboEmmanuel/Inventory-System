import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { StockLogModule } from './stock-log/stock-log.module';
import { CategoryModule } from './category/category.module';
import { SupplierModule } from './supplier/supplier.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from 'database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ProductModule,
    StockLogModule,
    CategoryModule,
    SupplierModule,
    OrderModule,
    OrderItemModule,
    CustomerModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { StockLogModule } from './stock-log/stock-log.module';
import { CategoryModule } from './category/category.module';
import { SupplierModule } from './supplier/supplier.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
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

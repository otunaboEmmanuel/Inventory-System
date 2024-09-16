import { Module } from '@nestjs/common';
import { StockLogService } from './stock-log.service';
import { StockLogController } from './stock-log.controller';

@Module({
  controllers: [StockLogController],
  providers: [StockLogService],
})
export class StockLogModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockLogService } from './stock-log.service';
import { CreateStockLogDto } from './dto/create-stock-log.dto';
import { UpdateStockLogDto } from './dto/update-stock-log.dto';

@Controller('stock-log')
export class StockLogController {
  constructor(private readonly stockLogService: StockLogService) {}

  @Post()
  create(@Body() createStockLogDto: CreateStockLogDto) {
    return this.stockLogService.create(createStockLogDto);
  }

  @Get()
  findAll() {
    return this.stockLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockLogDto: UpdateStockLogDto) {
    return this.stockLogService.update(+id, updateStockLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockLogService.remove(+id);
  }
}

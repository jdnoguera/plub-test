import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserId } from '../decorators/user.decorators';
import { JwtGuard } from '../auth/jwt.guard';

@UseGuards(JwtGuard)
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transactionService.findOne(id);
  }

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto, @UserId() userId: number) {
    return this.transactionService.create(createTransactionDto, userId);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionService.update(id, updateTransactionDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.transactionService.delete(id);
  }
}

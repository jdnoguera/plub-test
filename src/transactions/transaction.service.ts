import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>,
  ) {}

  create({ Title, Description }: CreateTransactionDto, userId: number): Promise<Transaction> {
    const transaction = new Transaction(Title, Description, userId);
    return this.transactionRepository.save(transaction);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  findOne(id: number): Promise<Transaction> {
    return this.transactionRepository.findOneBy({ Id: id });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    return this.transactionRepository.save({ Id: id, ...updateTransactionDto });
  }

  async delete(id: number): Promise<void> {
    await this.transactionRepository.softDelete(id);
  }
}

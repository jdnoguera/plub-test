import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty()
  Title: string;
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @ApiProperty()
  Description: string;
}

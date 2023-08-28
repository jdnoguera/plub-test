import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  Name: string;
  @ApiProperty()
  LastName: string;
  @ApiProperty()
  Email: string;
  @ApiProperty()
  Password: string;
}

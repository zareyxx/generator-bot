import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateGeneratorBodyDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}

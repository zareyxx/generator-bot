import { ApiProperty } from '@nestjs/swagger';
import { Instruction } from 'src/entities/instructions.entity';

export class CreateServiceBodyDto {
  @ApiProperty()
  instruction: Instruction;
}

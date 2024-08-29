import { ApiProperty } from '@nestjs/swagger';

export class CreateInstructionsBodyDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  timeWorked: number;
}

import { Module } from '@nestjs/common';
import { InstructionsService } from './instructions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instruction } from 'src/entities/instructions.entity';
import { Generator } from 'src/entities/generator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instruction, Generator])],
  providers: [InstructionsService],
  exports: [InstructionsService],
})
export class InstructionsModule {}

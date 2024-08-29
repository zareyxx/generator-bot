import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instruction } from 'src/entities/instructions.entity';
import { Repository } from 'typeorm';
import { Generator } from 'src/entities/generator.entity';

@Injectable()
export class InstructionsService {
  constructor(
    @InjectRepository(Instruction)
    private instructionRepository: Repository<Instruction>,
    @InjectRepository(Generator)
    private generatorRepository: Repository<Generator>,
  ) {}

  findAll() {
    return this.instructionRepository.find();
  }

  async createInstruction(name: string, timeWorked: number, id: number) {
    const gen = await this.generatorRepository.findOne({
      where: { id },
    });
    if (gen != null) {
      const instruction = new Instruction();
      instruction.name = name;
      instruction.timeWorked = timeWorked;
      instruction.generator = await this.generatorRepository.findOne({
        where: { id },
      });
      return await this.instructionRepository.save(instruction);
    }
    return null;
  }
}

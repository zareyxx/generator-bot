import { Controller, Post, Body, Param } from '@nestjs/common';
import { GeneratorService } from './generator.service';
import { SessionsService } from '../sessions/sessions.service';
import { CreateGeneratorBodyDto } from './dto/create-generator-body.dto';
import { CreateInstructionsBodyDto } from '../instructions/dto/create-instructions-body.dto';
import { InstructionsService } from '../instructions/instructions.service';
import { ServicesService } from '../services/services.service';
import { Instruction } from 'src/entities/instructions.entity';

@Controller('generator')
export class GeneratorController {
  constructor(
    private readonly generatorService: GeneratorService,
    private readonly sessionService: SessionsService,
    private readonly instructionsService: InstructionsService,
    private readonly servicesService: ServicesService,
  ) {}

  @Post('/')
  async create(@Body() generator: CreateGeneratorBodyDto) {
    return this.generatorService.create(generator.name);
  }

  @Post('/:id/start')
  async startSession(@Param('id') id: number) {
    return await this.sessionService.startSession(id);
  }

  @Post('/:id/end')
  async endSession(@Param('id') id: number) {
    return await this.sessionService.endSession(id);
  }

  @Post('/:id/instruction')
  async createInstruction(
    @Param('id') id: number,
    @Body() instruction: CreateInstructionsBodyDto,
  ) {
    return await this.instructionsService.createInstruction(
      instruction.name,
      instruction.timeWorked,
      id,
    );
  }

  @Post('/:generatorId/service/:instructionId')
  async createService(
    @Param('instructionId') instructionId: Instruction,
    lastService: Date,
  ) {
    console.log(instructionId);
    console.log(lastService);
    return await this.servicesService.createService(lastService, instructionId);
  }
}

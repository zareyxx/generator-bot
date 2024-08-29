import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Generator } from 'src/entities/generator.entity';
import { GeneratorController } from './generator.controller';
import { GeneratorService } from './generator.service';
import { SessionsModule } from '../sessions/sessions.module';
import { InstructionsModule } from '../instructions/instructions.module';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Generator]),
    SessionsModule,
    InstructionsModule,
    ServicesModule,
  ],
  controllers: [GeneratorController],
  providers: [GeneratorService],
})
export class GeneratorModule {}

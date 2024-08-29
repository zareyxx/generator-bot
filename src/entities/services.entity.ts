import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Instruction } from 'src/entities/instructions.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  lastService: Date;

  @ManyToOne(() => Instruction, (instructions) => instructions.service)
  instruction: Instruction;
}

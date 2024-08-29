import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Instruction } from './instructions.entity';
import { Session } from './sessions.entity';

@Entity()
export class Generator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Instruction, (instructions) => instructions.generator)
  instructions: Instruction[];

  @OneToMany(() => Session, (session) => session.generator)
  session: Session[];
}

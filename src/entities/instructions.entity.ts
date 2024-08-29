import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Generator } from './generator.entity';
import { Service } from 'src/entities/services.entity';

@Entity()
export class Instruction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  timeWorked: number;

  @ManyToOne(() => Generator, (generator) => generator.instructions)
  generator: Generator;

  @OneToMany(() => Service, (service) => service.instruction)
  service: Service;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Generator } from 'src/entities/generator.entity';

@Injectable()
export class GeneratorService {
  constructor(
    @InjectRepository(Generator)
    private generatorRepository: Repository<Generator>,
  ) {}

  findAll() {
    return this.generatorRepository.find();
  }

  async create(name: string) {
    const generator = new Generator();
    generator.name = name;
    return await this.generatorRepository.save(generator);
  }
}

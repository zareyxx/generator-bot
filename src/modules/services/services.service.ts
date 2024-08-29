import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from 'src/entities/services.entity';
import { Instruction } from 'src/entities/instructions.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  async createService(lastService: Date, instruction: Instruction) {
    const service = new Service();
    service.lastService = lastService;
    service.instruction = instruction;
    return await this.serviceRepository.save(service);
  }
}

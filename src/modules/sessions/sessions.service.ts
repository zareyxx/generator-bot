import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Session } from 'src/entities/sessions.entity';
import { Generator } from 'src/entities/generator.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
    @InjectRepository(Generator)
    private generatorRepository: Repository<Generator>,
  ) {}

  async getSession(generatorId: number) {
    const session = await this.sessionRepository.findOne({
      where: { endedAt: IsNull(), generator: { id: generatorId } },
    });
    return session;
  }

  findAll() {
    return this.sessionRepository.find();
  }

  async startSession(generatorId: number) {
    const runningSession = await this.getSession(generatorId);
    console.log(runningSession);

    if (runningSession === null) {
      const session = new Session();
      session.generator = await this.generatorRepository.findOne({
        where: { id: generatorId },
      });

      return await this.sessionRepository.save(session);
    }

    return runningSession;
  }

  async endSession(generatorId: number) {
    const res = await this.getSession(generatorId);

    if (res === null) {
      throw new NotFoundException('not found session');
    }

    res.endedAt = new Date();

    return await this.sessionRepository.save(res);
  }
}

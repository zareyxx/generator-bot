import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from 'src/entities/sessions.entity';
import { Generator } from 'src/entities/generator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Session, Generator])],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class SessionsModule {}

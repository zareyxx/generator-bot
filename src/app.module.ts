import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneratorModule } from 'src/modules/generator/generator.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts}'],
      synchronize: false,
    }),
    GeneratorModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}

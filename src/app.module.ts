import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamsModule } from './exams/exams.module';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ExamsModule, PrismaModule, QuestionsModule, AnswersModule],
})
export class AppModule {}

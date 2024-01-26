import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamsModule } from './exams/exams.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ExamsModule, PrismaModule],
})
export class AppModule {}

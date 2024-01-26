import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExamsService {
  constructor(private prisma: PrismaService){

  }

  create(createExamDto: CreateExamDto) {
    return this.prisma.exams.create({
      data: createExamDto
    });
  }

  findAll() {
    return this.prisma.exams.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  findOne(id: string) {
    return this.prisma.exams.findFirstOrThrow({
      where: {
        id
      }
    });
  }

  update(id: string, updateExamDto: UpdateExamDto) {
    return this.prisma.exams.update({
      where: {
        id
      },
      data: updateExamDto
    })
  }

  remove(id: string) {
    return this.prisma.exams.delete({
      where: {
        id
      }
    })
  }
}

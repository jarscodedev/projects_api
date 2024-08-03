import { Module } from '@nestjs/common'
import ProjectsService from './project.service'
import { ProjectsController } from './project.controller'
import { PrismaService } from 'src/prisma.service'
import { MessagesService } from 'src/utils/messages'

@Module({
  providers: [ProjectsService, PrismaService, MessagesService],
  controllers: [ProjectsController],
  imports: [ProjectsModule],
})

export class ProjectsModule {}

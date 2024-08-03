import { Module } from '@nestjs/common'
import { ProjectsModule } from './project/project.module'
import { PrismaService } from './prisma.service'
import { MessagesService } from './utils/messages'

@Module({
  imports: [ProjectsModule],
  controllers: [],
  providers: [PrismaService],
})

export class AppModule {}

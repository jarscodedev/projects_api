import { CreateProjectDto, UpdateProjectDto } from './dto/project.dto.js'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'
import { MessagesService } from '../utils/messages.js'

@Injectable()
export default class ProjectsService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly message: MessagesService
  ) {}

  async create(data: CreateProjectDto) {

    try {

      const project = await this.prisma.project.create({
        data: {
          id: data.id,
          title: data.title,
          description: data.description,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      })

      if (project['statuscode'] !== 200) {
        throw project
      }

      return this.message.successCreateProject()

    } 
    
    catch (error) {
      return error
    }

  }

  async updateProject(id: string, data: UpdateProjectDto) {

    try {
      const project = await this.prisma.project.update({
        where: { id },
        data: {
          title: data.title,
          description: data.description,
          updatedAt: new Date().toISOString()
        }
      })

      if (project['statuscode'] !== 200) {
        throw project
      }

      return this.message.successUpdateProject()

    } 
    
    catch (error) {
      return error
    }

  }

  async findAll() {

    try {

      const projects = await this.prisma.project.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })

      if (projects['statuscode'] !== 200) {
        throw projects
      }

      return projects

    } 
    
    catch (error) {
      return error
    }

  }

  async findOne(id: string) {

    try {

      const project = await this.prisma.project.findUnique({
        where: { id }
      })

      if (project['statuscode'] !== 200) {
        throw project
      }

      return project

    } 
    
    catch (error) {
      return error
    }

  }

  async deleteProject(id: string) {

    try {

      const project = await this.prisma.project.delete({
        where: { id }
      })

      if (project['statuscode'] !== 200) {
        throw project
      }

      return this.message.successDeleteProject()

    } 
    
    catch (error) {
      return error
    }

  }

}

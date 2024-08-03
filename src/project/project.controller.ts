import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common"
import ProjectsService from "./project.service"
import { CreateProjectDto, UpdateProjectDto } from "./dto/project.dto"

@Controller()
export class ProjectsController {

  constructor(private readonly projectService: ProjectsService) {}

  @Get("get-projects")
  async getProjects() {
    return this.projectService.findAll()
  }

  @Post("create-project")
  async createProject(@Body() data: CreateProjectDto) {
    return this.projectService.create(data)
  }

  @Put("update-project")
  async updateProject(@Body() data: UpdateProjectDto) {
    return this.projectService.updateProject(data.id, data)
  }

  @Delete("delete-project")
  async deleteProject(@Body() data: { id: string }) {
    return this.projectService.deleteProject(data.id)
  }
  
}

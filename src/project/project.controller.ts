import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common"
import ProjectsService from "./project.service"
import { CreateProjectDto, UpdateProjectDto } from "./dto/project.dto"
import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger"

@Controller()
export class ProjectsController {

  constructor(private readonly projectService: ProjectsService) {}

  @Get("get-projects")
  @ApiOperation({ summary: 'Get Projects' })
  @ApiResponse({ status: 200, description: 'Projects fetched successfully.'})
  @ApiResponse({ status: 500, description: 'Internal server error. An error occurred during projects fetch.'})
  @ApiResponse({ status: 404, description: 'Not found. No projects found.'})
  @ApiResponse({ status: 422, description: 'Unprocessable entity. Projects data is invalid.'})
  @ApiResponse({ status: 500, description: 'Internal server error. An error occurred during project creation.'})
  async getProjects() {
    return this.projectService.findAll()
  }

  @Post("create-project")
  @ApiOperation({ summary: 'Create Project' })
  @ApiBody({ type: CreateProjectDto } )
  @ApiResponse({ status: 201, description: 'Project created successfully.'}) 
  @ApiResponse({ status: 400, description: 'Bad request. Please check your data.'}) 
  @ApiResponse({ status: 422, description: 'Unprocessable entity. Project data is invalid.'}) 
  @ApiResponse({ status: 500, description: 'Internal server error. An error occurred during project creation.'}) 
  async createProject(@Body() data: CreateProjectDto) {
    return this.projectService.create(data)
  }

  @Put("update-project")
  @ApiOperation({ summary: 'Update Project' })
  @ApiResponse({ status: 200, description: 'Project updated successfully.'})
  @ApiResponse({ status: 400, description: 'Bad request. Please check your data.'})
  @ApiResponse({ status: 404, description: 'Not found. No project found.'})
  @ApiResponse({ status: 422, description: 'Unprocessable entity. Project data is invalid.'})
  @ApiResponse({ status: 500, description: 'Internal server error. An error occurred during project creation.'})
  async updateProject(@Body() data: UpdateProjectDto) {
    return this.projectService.updateProject(data.id, data)
  }

  @Delete("delete-project")
  @ApiOperation({ summary: 'Delete Project by Id' })
  @ApiResponse({ status: 200, description: 'Project deleted successfully.'})
  @ApiResponse({ status: 400, description: 'Bad request. Please check your data.'})
  @ApiResponse({ status: 404, description: 'Not found. No project found.'})
  @ApiResponse({ status: 422, description: 'Unprocessable entity. Project data is invalid.'})
  @ApiResponse({ status: 500, description: 'Internal server error. An error occurred during project creation.'})
  async deleteProject(@Body() data: { id: string }) {
    return this.projectService.deleteProject(data.id)
  }
  
}


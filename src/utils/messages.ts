import { ConflictException, HttpCode } from '@nestjs/common'
import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common'

export class MessagesService {

  protected bad_request_error: object
  protected not_found: object
  protected internal_server_error: object
  protected success_create_project: object
  protected success_update_project: object
  protected success_delete_project: object
  protected success_get_project: object
  protected project_not_found: object

  constructor() {

    this.internal_server_error = this.sendMessage('Internal server error', 500)
    this.bad_request_error = this.sendMessage('Bad request', 400)
    this.not_found = this.sendMessage('Resource not found', 404)
    this.success_create_project = this.sendMessage('Project created successfull', 200)
    this.success_update_project = this.sendMessage('Project updated successfull', 200)
    this.success_delete_project = this.sendMessage('Project deleted successfull', 200)
    this.project_not_found = this.sendMessage('Project not found', 404)

  }

  private sendMessage(
    message: string,
    statusCode: number,
    error?: string,
  ): object {

    switch (statusCode) {
      case 500:
        return new InternalServerErrorException(message)
      case 400:
        return new BadRequestException(message)
      case 404:
        return new NotFoundException(message)
      case 409:
        return new ConflictException(message)
      default:
        return {
          message: [message],
          ...(error !== undefined && { error: error }),
          statusCode: statusCode,
        }

    }

  }

  @HttpCode(500)
  internalServerError() {
    return this.internal_server_error
  }

  @HttpCode(400)
  badRequest() {
    return this.bad_request_error
  }

  @HttpCode(404)
  notFound() {
    return this.not_found
  }

  @HttpCode(409)
  projectFoundError() {
    return this.project_not_found
  }

  @HttpCode(200)
  successCreateProject() {
    return this.success_create_project
  }

  @HttpCode(200)
  successUpdateProject() {
    return this.success_update_project
  }

  @HttpCode(200)
  successDeleteProject() {
    return this.success_delete_project
  }

}

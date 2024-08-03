import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateProjectDto {

  @IsString()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumber()
  @IsNotEmpty()
  createdAt: Date

  @IsNumber()
  @IsNotEmpty()
  updatedAt: Date

}

export class UpdateProjectDto {

  @IsString()
  @IsNotEmpty()
  id: string

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumber()
  @IsNotEmpty()
  updatedAt: Date

}

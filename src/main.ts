import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as express from 'express'
import { join } from 'path'
import * as basicAuth from 'express-basic-auth'

async function bootstrap() {

  const app = await NestFactory.create(AppModule)

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Projects API')
    .setDescription('An API to manage my own projects')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api/docs', app, document)

  app.enableCors()

  // Configurar Basic Auth
  app.use('/api/docs', basicAuth({
    users: { [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD }, 
    challenge: true
  }));

  app.use('/api/docs', express.static(join(__dirname, '..', 'node_modules', 'swagger-ui-dist')))

  await app.listen(3000)

}
bootstrap()

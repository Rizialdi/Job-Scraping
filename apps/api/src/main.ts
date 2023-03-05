import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;

  // OpenAPI (Swagger) documentation
  const config = new DocumentBuilder()
    .setTitle('Job scraping documentation')
    .setDescription('The Job scraping API description')
    .setVersion('v1.0.0')
    .addTag('Job-scraping')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  Logger.log(
    `🚀 Documentation is available on: http://localhost:${port}/${globalPrefix}/docs`
  );
}

bootstrap();

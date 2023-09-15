import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import { ConfigService } from '@nestjs/config';
import { GlobalExceptionHandler } from './system/base/GlobalExceptionHandler';

const setup = async (app: INestApplication<any>) => {
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionHandler());
  app.enableCors();
};
const logger = new Logger();
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);
  setup(app)
    .then(() => {
      logger.log('init swagger');
      const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api', app, document);
    })
    .then(() => {
      logger.log('start server');
      app.listen(configService.get<number>('port') || 3000);
    });
};
bootstrap().then(() => {
  console.log('start');
});

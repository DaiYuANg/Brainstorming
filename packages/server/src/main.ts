import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import { ConfigService } from '@nestjs/config';
import { GlobalExceptionHandler } from './system/base/GlobalExceptionHandler';
import helmet from 'helmet';
const setup = async (app: INestApplication<any>) => {
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionHandler());
  app.enableCors();
  app.use(helmet());
};
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);
  setup(app)
    .then(() => {
      const config = new DocumentBuilder()
        .setTitle('Rockie')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api', app, document);
    })
    .then(() => {
      app.listen(configService.get<number>('port') || 3000);
      return configService;
    });
  return configService;
};
bootstrap().then((configService: ConfigService) => {
  const port = configService.get<number>('port') || 3000;
  setTimeout(() => {
    Logger.log(process.cwd);
    Logger.log('swagger:http://127.0.0.1:' + port + '/api');
    Logger.log('main:start');
  }, 1000);
});

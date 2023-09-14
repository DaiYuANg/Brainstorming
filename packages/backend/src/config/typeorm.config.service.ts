import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {
    this.configService = configService;
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('database.host') || '127.0.0.1',
      port: 5432,
      username: 'rockie',
      password: 'rockie',
      database: 'rockie',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
      logging: 'all',
    };
  }
}

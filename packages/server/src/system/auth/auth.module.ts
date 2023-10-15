import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../../modules/user/user.module';

@Module({
  imports: [TypeOrmModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

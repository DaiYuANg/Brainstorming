import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthJwtService {
  private readonly logger = new Logger(AuthJwtService.name);

  constructor(private readonly jwtService: JwtService) {}
}

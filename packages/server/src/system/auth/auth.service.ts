import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as os from 'os';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    console.log(os.tmpdir());
    this.logger.log(
      'default user' + configService.get<string>('auth.defaultUser'),
    );
    this.logger.log(
      'default password' + configService.get<string>('auth.defaultPassword'),
    );
  }

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByName(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    console.log(result);
    // instead of the user object
    const payload = { sub: user.id, username: user.email };
    console.log(password);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

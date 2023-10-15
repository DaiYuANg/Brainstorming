import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { CreateUserDto } from '../../modules/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    const tmpdir = os.tmpdir();
    const writeObject = {
      administrator: configService.getOrThrow<string>('auth.administrator'),
      administratorPassword: configService.getOrThrow<string>(
        'auth.administratorPassword',
      ),
    };
    const targetPath = path.join(tmpdir, 'admin.json');
    fs.writeFile(targetPath, JSON.stringify(writeObject), (err) => {
      if (err === null) return;
      this.logger.error(err);
    });
    this.logger.log('target:' + targetPath);
  }

  async signIn(email: string, pass: string): Promise<any> {
    // this.checkIsAdmin(email,password)
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

  private checkIsAdmin(username: string, password: string): boolean {
    const nameEqual = this.configService.get('auth.administrator') === username;
    const passwordEqual =
      this.configService.get('auth.administratorPassword') === password;
    return nameEqual && passwordEqual;
  }

  async create(createAuthDto: CreateAuthDto) {
    if (await this.usersService.checkExists(createAuthDto.username)) {
      throw new UnauthorizedException('User');
    }
    const createUserDto: CreateUserDto = {
      email: createAuthDto.username,
      password: createAuthDto.password,
    };

    await this.usersService.create(createUserDto);
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

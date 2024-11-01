import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdministratorRepository } from 'src/infrastructure/repositories/administrator.repository';
import { JwtService } from '@nestjs/jwt';
import { AdministratorLoginRequest } from '../dtos/administrator/request/administrator-login.request';
import { AdministratorEntity } from '../entities/administrator.entity';

@Injectable()
export class AdministratorService {
  constructor(
    private readonly administratorRepository: AdministratorRepository,
    private jwtService: JwtService,
  ) {}

  create(data: Partial<AdministratorEntity>) {
    return this.administratorRepository.create(data);
  }

  async login(request: AdministratorLoginRequest): Promise<string> {
    const admin = await this.administratorRepository.findByUsername(
      request.username,
    );

    if (admin?.password !== request.password) throw new UnauthorizedException();

    const payload = { sub: admin.id, username: admin.username };

    const token = await this.jwtService.signAsync(payload);

    return token;
  }
}

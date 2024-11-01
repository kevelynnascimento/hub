import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdministratorCreationRequest } from 'src/domain/dtos/administrator/request/administrator-creation.request';
import { AdministratorLoginRequest } from 'src/domain/dtos/administrator/request/administrator-login.request';
import { AdministratorService } from 'src/domain/services/administrator.service';
import { AuthGuard } from 'src/infrastructure/config/guards/auth.guard';

@ApiBearerAuth()
@ApiTags('administrators')
@Controller('administrators')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) { }

  @Post()
  create(@Body() request: AdministratorCreationRequest) {
    return this.administratorService.create(request);
  }

  @Post('login')
  public async login(
    @Body() request: AdministratorLoginRequest,
  ): Promise<string> {
    return this.administratorService.login(request);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

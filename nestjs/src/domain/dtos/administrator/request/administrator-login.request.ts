import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AdministratorLoginRequest {
  @ApiProperty()
  @IsNotEmpty({ message: 'Username is required.' })
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Password is required.' })
  password: string;
}

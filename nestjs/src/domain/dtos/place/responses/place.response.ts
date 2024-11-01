import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class PlaceResponse {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @Expose()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @Expose()
  description?: string;
}

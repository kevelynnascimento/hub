import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export enum OrderDirectionEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export class ListingRequest {
  @ApiProperty({
    description: 'Page number starts by 1',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  page: number;

  @ApiProperty({
    description: 'Page size',
    example: 10,
    required: true,
  })
  @IsNotEmpty()
  pageSize: number;

  @ApiProperty({
    description: 'Collumn name to order the results',
    example: 'name',
    required: false,
  })
  @IsOptional()
  sortColumn?: string;

  @ApiProperty({
    description: 'Direction to order the results',
    enum: OrderDirectionEnum,
    example: OrderDirectionEnum.ASC,
    required: false,
  })
  @IsOptional()
  sortDirection?: OrderDirectionEnum;
}

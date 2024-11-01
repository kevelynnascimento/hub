import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PlaceCreationRequest } from 'src/domain/dtos/place/requests/place-creation.request';
import { PlaceListingRequest } from 'src/domain/dtos/place/requests/place-listing.request';
import { PlaceUpdateRequest } from 'src/domain/dtos/place/requests/place-update.request';
import { PlaceListingResponse } from 'src/domain/dtos/place/responses/place-listing.response';
import { ListingResponse } from 'src/domain/dtos/shared/responses/listing.response';
import { PlaceService } from 'src/domain/services/place.service';

@ApiBearerAuth()
@ApiTags('places')
@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  create(@Body() request: PlaceCreationRequest) {
    return this.placeService.create(request);
  }

  @Get()
  async toList(
    @Query() request: PlaceListingRequest,
  ): Promise<ListingResponse<PlaceListingResponse>> {
    const response = await this.placeService.toList(request);
    return response;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() request: PlaceUpdateRequest) {
    return this.placeService.update(id, request);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.placeService.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { PlaceEntity } from '../entities/place.entity';
import { ListingResponse } from '../dtos/shared/responses/listing.response';
import { ListingRequest } from '../dtos/shared/requests/listing.request';
import { PlaceListingResponse } from '../dtos/place/responses/place-listing.response';
import { PlaceRepository } from 'src/infrastructure/repositories/place.repository';

@Injectable()
export class PlaceService {
  constructor(private readonly placeRepository: PlaceRepository) {}

  create(data: Partial<PlaceEntity>) {
    return this.placeRepository.create(data);
  }

  async toList(
    listingRequest: ListingRequest,
  ): Promise<ListingResponse<PlaceListingResponse>> {
    const { rows, count } = await this.placeRepository.toList(listingRequest);

    const response = {
      rows: rows.map(({ name, description }) => ({
        name,
        description,
      })),
      count,
    };

    return response;
  }

  findOne(id: string): Promise<PlaceEntity> {
    return this.placeRepository.findOne(id);
  }

  update(id: string, data: Partial<PlaceEntity>): Promise<PlaceEntity> {
    return this.placeRepository.update(id, data);
  }

  delete(id: string) {
    return this.placeRepository.delete(id);
  }
}

import { Test, TestingModule } from '@nestjs/testing';

import { PlaceRepository } from 'src/infrastructure/repositories/place.repository';
import { PlaceService } from '../place.service';
import { PlaceEntity } from 'src/domain/entities/place.entity';
import { ListingRequest } from 'src/domain/dtos/shared/requests/listing.request';
import { ListingResponse } from 'src/domain/dtos/shared/responses/listing.response';
import { PlaceListingResponse } from 'src/domain/dtos/place/responses/place-listing.response';

describe('PlaceService', () => {
  let service: PlaceService;
  let repository: PlaceRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlaceService,
        {
          provide: PlaceRepository,
          useValue: {
            create: jest.fn(),
            toList: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
    repository = module.get<PlaceRepository>(PlaceRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a place', async () => {
      const data: Partial<PlaceEntity> = { name: 'Test Place' };
      const result = { id: '1', ...data };
      jest.spyOn(repository, 'create').mockResolvedValue(result);

      expect(await service.create(data)).toEqual(result);
      expect(repository.create).toHaveBeenCalledWith(data);
    });
  });

  describe('toList', () => {
    it('should return a list of places', async () => {
      const listingRequest: ListingRequest = { page: 1, pageSize: 10 };
      const rows = [{ name: 'Place 1', description: 'Description 1' }];
      const count = 1;
      const repositoryResult = { rows, count };
      const expectedResponse: ListingResponse<PlaceListingResponse> = {
        rows: rows.map(({ name, description }) => ({ name, description })),
        count,
      };

      jest.spyOn(repository, 'toList').mockResolvedValue(repositoryResult);

      expect(await service.toList(listingRequest)).toEqual(expectedResponse);
      expect(repository.toList).toHaveBeenCalledWith(listingRequest);
    });
  });

  describe('findOne', () => {
    it('should return a place by id', async () => {
      const id = '1';
      const result = { id, name: 'Test Place' };
      jest.spyOn(repository, 'findOne').mockResolvedValue(result);

      expect(await service.findOne(id)).toEqual(result);
      expect(repository.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should update a place', async () => {
      const id = '1';
      const data: Partial<PlaceEntity> = { name: 'Updated Place' };
      const result = { id, ...data };
      jest.spyOn(repository, 'update').mockResolvedValue(result);

      expect(await service.update(id, data)).toEqual(result);
      expect(repository.update).toHaveBeenCalledWith(id, data);
    });
  });

  describe('delete', () => {
    it('should delete a place', async () => {
      const id = '1';
      jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

      expect(await service.delete(id)).toBeUndefined();
      expect(repository.delete).toHaveBeenCalledWith(id);
    });
  });
});

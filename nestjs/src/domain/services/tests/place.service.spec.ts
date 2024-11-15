import { Test, TestingModule } from '@nestjs/testing';

import { PlaceRepository } from 'src/infrastructure/repositories/place.repository';
import { PlaceService } from '../place.service';

describe('PlaceService', () => {
  let service: PlaceService;
  let repository: {
    create: jest.Mock;
    toList: jest.Mock;
    findOne: jest.Mock;
    update: jest.Mock;
    delete: jest.Mock;
  };

  beforeEach(async () => {
    repository = {
      create: jest.fn(),
      toList: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlaceService,
        {
          provide: PlaceRepository,
          useValue: repository,
        },
      ],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
  });

  describe('create', () => {
    it('should create a place', async () => {
      const input = {
        name: 'Test Place',
        description: 'Test Description',
      };

      const place = {
        id: '1',
        ...input,
      };

      repository.create.mockResolvedValue(place);

      const result = await service.create(input);

      expect(result).toEqual(place);
      expect(repository.create).toHaveBeenCalled();
    });
  });
});

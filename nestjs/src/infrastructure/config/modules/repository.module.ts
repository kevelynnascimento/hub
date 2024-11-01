import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceEntity, PlaceSchema } from 'src/domain/entities/place.entity';
import { PlaceRepository } from '../../repositories/place.repository';
import { AdministratorRepository } from 'src/infrastructure/repositories/administrator.repository';
import {
  AdministratorEntity,
  AdministratorSchema,
} from 'src/domain/entities/administrator.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlaceEntity.name, schema: PlaceSchema },
      { name: AdministratorEntity.name, schema: AdministratorSchema },
    ]),
  ],
  providers: [PlaceRepository, AdministratorRepository],
  exports: [PlaceRepository, AdministratorRepository],
})
export class RepositoryModule {}

import { Module } from '@nestjs/common';
import { PlaceService } from 'src/domain/services/place.service';
import { RepositoryModule } from './repository.module';
import { AdministratorService } from 'src/domain/services/administrator.service';

@Module({
  imports: [RepositoryModule],
  providers: [PlaceService, AdministratorService],
  exports: [PlaceService, AdministratorService],
})
export class ServiceModule {}

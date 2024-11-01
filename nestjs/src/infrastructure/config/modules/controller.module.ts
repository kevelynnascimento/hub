import { Module } from '@nestjs/common';
import { PlaceController } from 'src/controllers/place.controller';
import { ServiceModule } from './service.module';
import { AdministratorController } from 'src/controllers/administrator.controller';

@Module({
  imports: [ServiceModule],
  controllers: [PlaceController, AdministratorController],
})
export class ControllerModule {}

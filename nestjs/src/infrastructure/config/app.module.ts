import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ControllerModule } from './modules/controller.module';
import { RepositoryModule } from './modules/repository.module';
import { ServiceModule } from './modules/service.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ControllerModule,
    RepositoryModule,
    ServiceModule,
  ],
})
export class AppModule {}

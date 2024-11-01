import { Model } from 'mongoose';
import { BaseRepository } from './base/base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import {
  AdministratorDocument,
  AdministratorEntity,
} from 'src/domain/entities/administrator.entity';

@Injectable()
export class AdministratorRepository extends BaseRepository<AdministratorDocument> {
  constructor(
    @InjectModel(AdministratorEntity.name)
    private readonly model: Model<AdministratorDocument>,
  ) {
    super(model);
  }

  async findByUsername(username: string): Promise<AdministratorEntity> {
    return this.model.findOne({ username: username }).exec();
  }
}

import { Model } from 'mongoose';
import { BaseRepository } from './base/base.repository';
import { PlaceDocument, PlaceEntity } from 'src/domain/entities/place.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaceRepository extends BaseRepository<PlaceDocument> {
  constructor(
    @InjectModel(PlaceEntity.name)
    model: Model<PlaceDocument>,
  ) {
    super(model);
  }
}

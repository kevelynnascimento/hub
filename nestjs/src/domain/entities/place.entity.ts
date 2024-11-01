import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CustomSchema } from 'src/infrastructure/config/decorators/custom-schema.decorator';

export type PlaceDocument = HydratedDocument<PlaceEntity>;

@CustomSchema('place')
export class PlaceEntity {
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description?: string;

  @Prop({ required: false })
  deactivatedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}

export const PlaceSchema = SchemaFactory.createForClass(PlaceEntity);

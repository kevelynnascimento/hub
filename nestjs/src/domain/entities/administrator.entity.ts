import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CustomSchema } from 'src/infrastructure/config/decorators/custom-schema.decorator';

export type AdministratorDocument = HydratedDocument<AdministratorEntity>;

@CustomSchema('administrator')
export class AdministratorEntity {
  id: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  deactivatedAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}

export const AdministratorSchema =
  SchemaFactory.createForClass(AdministratorEntity);

import { Schema, SchemaOptions } from '@nestjs/mongoose';

export function CustomSchema(collectionName: string): ClassDecorator {
  return Schema({
    collection: collectionName,
    timestamps: true,
    toJSON: {
      versionKey: false,
      transform: (_, ret) => {
        const id = ret._id;
        delete ret._id;
        const result = { id, ...ret };
        return result;
      },
    },
  } as SchemaOptions);
}

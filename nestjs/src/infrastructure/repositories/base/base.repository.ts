import { Model, Document } from 'mongoose';
import {
  ListingRequest,
  OrderDirectionEnum,
} from 'src/domain/dtos/shared/requests/listing.request';
import { ListingModel } from 'src/domain/models/shared/listing.model';

export class BaseRepository<T extends Document> {
  constructor(private readonly baseModel: Model<T>) {}

  async create(data: Partial<T>) {
    const created = new this.baseModel(data);
    created.save();
  }

  async toList(request: ListingRequest): Promise<ListingModel<T>> {
    const { page, pageSize, sortDirection, sortColumn } = request;

    const skip = (page - 1) * pageSize;

    const sortOrder = sortDirection === OrderDirectionEnum.ASC ? 1 : -1;

    const [count, rows] = await Promise.all([
      this.baseModel.countDocuments().exec(),
      this.baseModel
        .find()
        .skip(skip)
        .limit(pageSize)
        .sort({ [sortColumn]: sortOrder })
        .exec(),
    ]);

    return {
      rows,
      count,
    };
  }
  async findOne(id: string): Promise<T> {
    return this.baseModel.findById(id).exec();
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return this.baseModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string) {
    this.baseModel.deleteOne({ id }).exec();
  }
}

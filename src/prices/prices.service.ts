import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Price } from 'src/database/schemas/price.schema';

@Injectable()
export class PricesService {
  constructor(@InjectModel(Price.name) private priceModel: Model<Price>) {}

  async create(priceDto: { title: string; price: number }): Promise<Price> {
    const newPrice = new this.priceModel(priceDto);
    return newPrice.save();
  }
  async findAll(): Promise<Price[]> {
    return this.priceModel.find();
  }
}

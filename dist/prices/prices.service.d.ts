import { Model } from 'mongoose';
import { Price } from 'src/database/schemas/price.schema';
export declare class PricesService {
    private priceModel;
    constructor(priceModel: Model<Price>);
    create(priceDto: {
        title: string;
        price: number;
    }): Promise<Price>;
    findAll(): Promise<Price[]>;
}

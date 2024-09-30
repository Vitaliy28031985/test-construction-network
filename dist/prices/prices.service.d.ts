import { Model } from 'mongoose';
import { RequestWithUser } from "src/interfaces/requestWithUser";
import { Price } from 'src/database/schemas/price.schema';
export declare class PricesService {
    private priceModel;
    constructor(priceModel: Model<Price>);
    create(priceDto: {
        title: string;
        price: number;
    }, req: RequestWithUser): Promise<Price>;
    findAll(req: RequestWithUser): Promise<Price[]>;
}

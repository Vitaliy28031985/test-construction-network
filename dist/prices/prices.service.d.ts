import { Model, Types } from 'mongoose';
import { RequestWithUser } from "src/interfaces/requestWithUser";
import { Price } from 'src/database/schemas/price.schema';
import { PricesDto } from "./price.dto";
export declare class PricesService {
    private priceModel;
    constructor(priceModel: Model<Price>);
    create(priceDto: PricesDto, req: RequestWithUser): Promise<Price>;
    findAll(req: RequestWithUser): Promise<Price[]>;
    remove(priceId: Types.ObjectId, req: RequestWithUser): Promise<Price>;
    update(priceId: Types.ObjectId, priceDto: PricesDto, req: RequestWithUser): Promise<Price>;
}

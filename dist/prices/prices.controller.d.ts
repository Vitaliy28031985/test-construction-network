import { PricesService } from "./prices.service";
import { Price } from "src/database/schemas/price.schema";
import { RequestWithUser } from "src/interfaces/requestWithUser";
export declare class PricesController {
    private readonly pricesService;
    constructor(pricesService: PricesService);
    getAll(req: RequestWithUser): Promise<Price[]>;
    create(priceDto: {
        title: string;
        price: number;
    }, req: RequestWithUser): Promise<Price>;
}

import { PricesService } from "./prices.service";
import { Price } from "src/database/schemas/price.schema";
export declare class PricesController {
    private readonly pricesService;
    constructor(pricesService: PricesService);
    getAll(): Promise<Price[]>;
    create(priceDto: {
        title: string;
        price: number;
    }): Promise<Price>;
}

import { PricesService } from "./prices.service";
import { Price } from "src/database/schemas/price.schema";
import { RequestWithUser } from "src/interfaces/requestWithUser";
import { PricesDto } from "./price.dto";
export declare class PricesController {
    private readonly pricesService;
    constructor(pricesService: PricesService);
    getAll(req: RequestWithUser): Promise<Price[]>;
    create(priceDto: PricesDto, req: RequestWithUser): Promise<Price>;
    update(priceId: string, priceDto: PricesDto, req: RequestWithUser): Promise<Price>;
    remove(priceId: string, req: RequestWithUser): Promise<Price>;
}

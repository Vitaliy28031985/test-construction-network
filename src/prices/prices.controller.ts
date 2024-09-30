import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { PricesService } from "./prices.service";
import { Price } from "src/database/schemas/price.schema";
import { RequestWithUser } from "src/interfaces/requestWithUser";
import { AuthGuard } from "src/auth/auth.guard";
import { TransformPricePipe } from "./transform-price/transform-price.pipe";


@Controller("prices")
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}
  @Get()
  @UseGuards(AuthGuard)
  async getAll(@Req() req: RequestWithUser) {
    return this.pricesService.findAll(req);
  }

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body(TransformPricePipe) priceDto: { title: string; price: number },
    @Req() req: RequestWithUser
  ): Promise<Price> {
    return this.pricesService.create(priceDto, req);
  }
}

import { Body, Controller, Get, Post } from "@nestjs/common";
import { PricesService } from "./prices.service";
import { Price } from "src/database/schemas/price.schema";

@Controller("prices")
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}
  @Get()
  async getAll() {
    return this.pricesService.findAll();
  }
  
  @Post()
  async create(
    @Body() priceDto: { title: string; price: number }
  ): Promise<Price> {
    return this.pricesService.create(priceDto);
  }
}

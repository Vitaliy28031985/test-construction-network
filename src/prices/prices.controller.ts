import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { PricesService } from "./prices.service";
import { Price } from "src/database/schemas/price.schema";
import { RequestWithUser } from "src/interfaces/requestWithUser";
import { AuthGuard } from "src/auth/auth.guard";
import { TransformPricePipe } from "./transform-price/transform-price.pipe";
import { Types } from "mongoose";
import { PricesDto } from "./price.dto";


@Controller("prices")
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}
  @Get()
  @UseGuards(AuthGuard)
  async getAll(@Req() req: RequestWithUser) {
    return this.pricesService.findAll(req);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  async create(
    @Body(TransformPricePipe) priceDto: PricesDto,
    @Req() req: RequestWithUser
  ): Promise<Price> {
    console.log(priceDto)
    return this.pricesService.create(priceDto, req);
  }

  @Put(":priceId")
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  async update(
    @Param("priceId") priceId: string,
    @Body(TransformPricePipe) priceDto: PricesDto,
    @Req() req: RequestWithUser
  ) {
    const objectId = new Types.ObjectId(priceId);
    return this.pricesService.update(objectId, priceDto, req);
  }

  @Delete(":priceId")
  @UseGuards(AuthGuard)
  async remove(@Param("priceId") priceId: string, @Req() req: RequestWithUser) {
    const objectId = new Types.ObjectId(priceId);
    return this.pricesService.remove(objectId, req);
  }
}


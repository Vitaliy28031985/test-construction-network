import { Injectable, Req } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestWithUser } from "src/interfaces/requestWithUser";
import { Price } from 'src/database/schemas/price.schema';
import { UserGet } from "src/interfaces/userGet";


@Injectable()
export class PricesService {
  constructor(@InjectModel(Price.name) private priceModel: Model<Price>) {}

  async create(
    priceDto: { title: string; price: number },
    @Req() req: RequestWithUser
  ): Promise<Price> {

    con

   const user = req.user;
   if (!user || typeof user !== "object" || !("_id" in user)) {
     throw new Error("User not found");
   }
    const typedUser = user as unknown as UserGet;
    
    if (typeof priceDto.price !== "number") {
      throw new Error("price isn`t number"); 
    }

    const newPrice = this.priceModel.create({ ...priceDto, owner: typedUser });
    return newPrice;
  }


  async findAll(@Req() req: RequestWithUser): Promise<Price[]> {
    const user = req.user;
    if (!user || typeof user !== "object" || !("_id" in user)) {
      throw new Error("User not found");
    }
    const typedUser = user as unknown as UserGet;

    return this.priceModel.find({ owner: typedUser._id });
  }
}

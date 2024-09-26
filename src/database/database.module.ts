import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";
import { MongooseModule } from "@nestjs/mongoose";
import { Price, PriceSchema } from "./schemas/price.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Price.name, schema: PriceSchema }]),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

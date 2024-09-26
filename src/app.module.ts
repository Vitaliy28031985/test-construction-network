import { Module } from "@nestjs/common";
import { PricesModule } from "./prices/prices.module";
import { MongooseModule } from "@nestjs/mongoose";
import { config } from "dotenv";
config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_HOST), PricesModule],
})
export class AppModule {}

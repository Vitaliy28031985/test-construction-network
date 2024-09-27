import { Module } from "@nestjs/common";
import { PricesModule } from "./prices/prices.module";
import { MongooseModule } from "@nestjs/mongoose";
import { config } from "dotenv";
import { UsersModule } from './users/users.module';
config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_HOST), PricesModule, UsersModule],
})
export class AppModule {}

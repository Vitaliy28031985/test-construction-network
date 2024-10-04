import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";
import { MongooseModule } from "@nestjs/mongoose";
import { Price, PriceSchema } from "./schemas/price.schema";
import { Allow, AllowSchema } from "./schemas/allow.schema";
import { User, UserSchema } from "./schemas/user.schema";
import { Reviews, ReviewsSchema } from "./schemas/reviewsData.schema";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Price.name, schema: PriceSchema }]),
    MongooseModule.forFeature([{ name: Allow.name, schema: AllowSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{name: Reviews.name, schema: ReviewsSchema}]),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

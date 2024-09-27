import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Price, PriceSchema } from "src/database/schemas/price.schema";
import { Allow, AllowSchema } from "src/database/schemas/allow.schema";
import { User, UserSchema } from "src/database/schemas/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Price.name, schema: PriceSchema }]),
    MongooseModule.forFeature([{ name: Allow.name, schema: AllowSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

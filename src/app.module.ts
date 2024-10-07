import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PricesModule } from "./prices/prices.module";
import { MongooseModule } from "@nestjs/mongoose";
import { config } from "dotenv";
import { UsersModule } from './users/users.module';
import { AuthMiddleware } from "./auth/auth.middleware";
import { User, UserSchema } from "./database/schemas/user.schema";
import { ReviewsModule } from './reviews/reviews.module';
import { AboutModule } from './about/about.module';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_HOST),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PricesModule,
    UsersModule,
    ReviewsModule,
    AboutModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("prices");
    consumer.apply(AuthMiddleware).forRoutes("users/logout");
    consumer.apply(AuthMiddleware).forRoutes("reviews");
    consumer.apply(AuthMiddleware).forRoutes("about/add/about");
     consumer
       .apply(AuthMiddleware)
       .forRoutes("about/add/experience/:experienceId");
  }
}

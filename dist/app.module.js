"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prices_module_1 = require("./prices/prices.module");
const mongoose_1 = require("@nestjs/mongoose");
const dotenv_1 = require("dotenv");
const users_module_1 = require("./users/users.module");
const auth_middleware_1 = require("./auth/auth.middleware");
const user_schema_1 = require("./database/schemas/user.schema");
const reviews_module_1 = require("./reviews/reviews.module");
const about_module_1 = require("./about/about.module");
(0, dotenv_1.config)();
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes("prices");
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes("users/logout");
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes("reviews");
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes("about/add/about");
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes("about/add/experience/:experienceId");
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.DB_HOST),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            prices_module_1.PricesModule,
            users_module_1.UsersModule,
            reviews_module_1.ReviewsModule,
            about_module_1.AboutModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
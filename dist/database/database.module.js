"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const database_providers_1 = require("./database.providers");
const mongoose_1 = require("@nestjs/mongoose");
const price_schema_1 = require("./schemas/price.schema");
const allow_schema_1 = require("./schemas/allow.schema");
const user_schema_1 = require("./schemas/user.schema");
const reviewsData_schema_1 = require("./schemas/reviewsData.schema");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: price_schema_1.Price.name, schema: price_schema_1.PriceSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: allow_schema_1.Allow.name, schema: allow_schema_1.AllowSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: reviewsData_schema_1.Reviews.name, schema: reviewsData_schema_1.ReviewsSchema }]),
        ],
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map
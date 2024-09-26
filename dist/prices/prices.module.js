"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricesModule = void 0;
const common_1 = require("@nestjs/common");
const prices_service_1 = require("./prices.service");
const prices_controller_1 = require("./prices.controller");
const mongoose_1 = require("@nestjs/mongoose");
const price_schema_1 = require("../database/schemas/price.schema");
let PricesModule = class PricesModule {
};
exports.PricesModule = PricesModule;
exports.PricesModule = PricesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: price_schema_1.Price.name, schema: price_schema_1.PriceSchema }]),
        ],
        controllers: [prices_controller_1.PricesController],
        providers: [prices_service_1.PricesService],
    })
], PricesModule);
//# sourceMappingURL=prices.module.js.map
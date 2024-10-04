"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricesController = void 0;
const common_1 = require("@nestjs/common");
const prices_service_1 = require("./prices.service");
const auth_guard_1 = require("../auth/auth.guard");
const transform_price_pipe_1 = require("./transform-price/transform-price.pipe");
const mongoose_1 = require("mongoose");
const price_dto_1 = require("./price.dto");
let PricesController = class PricesController {
    constructor(pricesService) {
        this.pricesService = pricesService;
    }
    async getAll(req) {
        return this.pricesService.findAll(req);
    }
    async create(priceDto, req) {
        return this.pricesService.create(priceDto, req);
    }
    async update(priceId, priceDto, req) {
        const objectId = new mongoose_1.Types.ObjectId(priceId);
        return this.pricesService.update(objectId, priceDto, req);
    }
    async remove(priceId, req) {
        const objectId = new mongoose_1.Types.ObjectId(priceId);
        return this.pricesService.remove(objectId, req);
    }
};
exports.PricesController = PricesController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)(transform_price_pipe_1.TransformPricePipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [price_dto_1.PricesDto, Object]),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":priceId"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("priceId")),
    __param(1, (0, common_1.Body)(transform_price_pipe_1.TransformPricePipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, price_dto_1.PricesDto, Object]),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":priceId"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("priceId")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "remove", null);
exports.PricesController = PricesController = __decorate([
    (0, common_1.Controller)("prices"),
    __metadata("design:paramtypes", [prices_service_1.PricesService])
], PricesController);
//# sourceMappingURL=prices.controller.js.map
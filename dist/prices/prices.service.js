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
exports.PricesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const price_schema_1 = require("../database/schemas/price.schema");
const price_dto_1 = require("./price.dto");
let PricesService = class PricesService {
    constructor(priceModel) {
        this.priceModel = priceModel;
    }
    async create(priceDto, req) {
        const user = req.user;
        if (!user || typeof user !== "object" || !("_id" in user)) {
            throw new Error("User not found");
        }
        const typedUser = user;
        if (typeof priceDto.price !== "number") {
            throw new Error("price isn`t number");
        }
        const newPrice = this.priceModel.create({ ...priceDto, owner: typedUser });
        return newPrice;
    }
    async findAll(req) {
        const user = req.user;
        if (!user || typeof user !== "object" || !("_id" in user)) {
            throw new Error("User not found");
        }
        const typedUser = user;
        return this.priceModel.find({ owner: typedUser._id });
    }
    async remove(priceId, req) {
        const user = req.user;
        if (!user || typeof user !== "object" || !("_id" in user)) {
            throw new Error("User not found");
        }
        const typedUser = user;
        return this.priceModel.findOneAndDelete({
            owner: typedUser._id,
            _id: priceId,
        });
    }
    async update(priceId, priceDto, req) {
        const user = req.user;
        if (!user || typeof user !== "object" || !("_id" in user)) {
            throw new Error("User not found");
        }
        const typedUser = user;
        return await this.priceModel.findByIdAndUpdate({ owner: typedUser._id, _id: priceId }, priceDto, { new: true, fields: ["-createdAt", "-updatedAt"] });
    }
};
exports.PricesService = PricesService;
__decorate([
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [price_dto_1.PricesDto, Object]),
    __metadata("design:returntype", Promise)
], PricesService.prototype, "create", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PricesService.prototype, "findAll", null);
__decorate([
    __param(0, (0, common_1.Param)("priceId")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_2.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], PricesService.prototype, "remove", null);
__decorate([
    __param(0, (0, common_1.Param)("priceId")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_2.Types.ObjectId, price_dto_1.PricesDto, Object]),
    __metadata("design:returntype", Promise)
], PricesService.prototype, "update", null);
exports.PricesService = PricesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(price_schema_1.Price.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PricesService);
//# sourceMappingURL=prices.service.js.map
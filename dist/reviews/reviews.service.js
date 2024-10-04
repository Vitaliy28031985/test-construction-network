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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reviewsData_schema_1 = require("../database/schemas/reviewsData.schema");
let ReviewsService = class ReviewsService {
    constructor(reviewModel) {
        this.reviewModel = reviewModel;
    }
    async findAll() {
        return this.reviewModel.find();
    }
    async createReviews(dto, req, ownerId) {
        const user = req.user;
        if (!user || typeof user !== "object" || !("_id" in user)) {
            throw new Error("User not found");
        }
        const typedUser = user;
        const newReviews = this.reviewModel.create({ ...dto, ownerId, owner: typedUser });
        return newReviews;
    }
    async createRating(reviewId, dto) {
        const review = await this.reviewModel.findById(reviewId.toString());
        if (!review) {
            console.error(`Review with id ${reviewId.toString()} not found.`);
            return;
        }
        await review.rating.push(dto);
        const newTotalRating = (dto.attitude + dto.deadline + dto.quality + dto.responsibility) / 4;
        const newReviews = await this.reviewModel.findByIdAndUpdate(reviewId.toString(), { $push: { rating: review.rating } }, { new: true });
        const newTotal = await this.reviewModel.findByIdAndUpdate(reviewId.toString(), { totalRating: newTotalRating }, { new: true });
        return newTotal;
    }
};
exports.ReviewsService = ReviewsService;
__decorate([
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Param)("ownerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, mongoose_2.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], ReviewsService.prototype, "createReviews", null);
__decorate([
    __param(0, (0, common_1.Param)("priceId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_2.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], ReviewsService.prototype, "createRating", null);
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reviewsData_schema_1.Reviews.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map
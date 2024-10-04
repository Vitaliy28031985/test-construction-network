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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const reviews_service_1 = require("./reviews.service");
const reviews_guard_1 = require("./reviews.guard");
const mongoose_1 = require("mongoose");
const rating_guard_1 = require("./rating.guard");
let ReviewsController = class ReviewsController {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    async getAll() {
        return this.reviewsService.findAll();
    }
    async createNewReview(dto, req, ownerId) {
        const ownerObject = new mongoose_1.Types.ObjectId(ownerId);
        return this.reviewsService.createReviews(dto, req, ownerObject);
    }
    async createRating(reviewId, dto) {
        const objectId = new mongoose_1.Types.ObjectId(reviewId);
        return this.reviewsService.createRating(objectId, dto);
    }
};
exports.ReviewsController = ReviewsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)("/:ownerId"),
    (0, common_1.UseGuards)(reviews_guard_1.ReviewsGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Param)("ownerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "createNewReview", null);
__decorate([
    (0, common_1.Post)("rating/:reviewId"),
    (0, common_1.UseGuards)(rating_guard_1.RatingGuard),
    __param(0, (0, common_1.Param)("reviewId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "createRating", null);
exports.ReviewsController = ReviewsController = __decorate([
    (0, common_1.Controller)("reviews"),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsController);
//# sourceMappingURL=reviews.controller.js.map
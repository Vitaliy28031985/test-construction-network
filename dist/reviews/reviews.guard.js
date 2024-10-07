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
exports.ReviewsGuard = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reviewsData_schema_1 = require("../database/schemas/reviewsData.schema");
let ReviewsGuard = class ReviewsGuard {
    constructor(reviewModel) {
        this.reviewModel = reviewModel;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || typeof user !== "object" || !("_id" in user)) {
            return false;
        }
        const typedUser = user;
        const reviews = await this.reviewModel
            .find({ owner: typedUser._id })
            .exec();
        if (!Array.isArray(reviews)) {
            return false;
        }
        if (typedUser.role !== "customer") {
            return false;
        }
        if (reviews.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
};
exports.ReviewsGuard = ReviewsGuard;
exports.ReviewsGuard = ReviewsGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reviewsData_schema_1.Reviews.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReviewsGuard);
//# sourceMappingURL=reviews.guard.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsSchema = exports.Reviews = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const rating_schema_1 = require("./rating.schema");
const mongoose_2 = require("mongoose");
let Reviews = class Reviews {
};
exports.Reviews = Reviews;
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, min: 0, max: 5, default: 0 }),
    __metadata("design:type", Number)
], Reviews.prototype, "totalRating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Reviews.prototype, "positive", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Reviews.prototype, "negative", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Reviews.prototype, "conclusion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [rating_schema_1.RatingSchema], default: [] }),
    __metadata("design:type", rating_schema_1.Rating)
], Reviews.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Reviews.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, default: null }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Reviews.prototype, "ownerId", void 0);
exports.Reviews = Reviews = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Reviews);
exports.ReviewsSchema = mongoose_1.SchemaFactory.createForClass(Reviews);
//# sourceMappingURL=reviewsData.schema.js.map
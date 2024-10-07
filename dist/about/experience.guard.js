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
exports.ExperienceGuard = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const about_schema_1 = require("../database/schemas/about.schema");
let ExperienceGuard = class ExperienceGuard {
    constructor(aboutModel) {
        this.aboutModel = aboutModel;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const experienceId = request.params.experienceId;
        const user = request.user;
        const about = await this.aboutModel.findById(experienceId).exec();
        if (about.owner.toString() === user._id.toString()) {
            return true;
        }
    }
};
exports.ExperienceGuard = ExperienceGuard;
exports.ExperienceGuard = ExperienceGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(about_schema_1.About.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ExperienceGuard);
//# sourceMappingURL=experience.guard.js.map
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
exports.AboutGuard = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const about_schema_1 = require("../database/schemas/about.schema");
let AboutGuard = class AboutGuard {
    constructor(aboutModel) {
        this.aboutModel = aboutModel;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || typeof user !== "object" || !("_id" in user)) {
            return false;
        }
        const typedUser = user;
        const about = await this.aboutModel.find({ owner: typedUser._id }).exec();
        if (!Array.isArray(about)) {
            return false;
        }
        if (typedUser.role === "customer") {
            return false;
        }
        if (about.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
};
exports.AboutGuard = AboutGuard;
exports.AboutGuard = AboutGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(about_schema_1.About.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AboutGuard);
//# sourceMappingURL=about.guard.js.map
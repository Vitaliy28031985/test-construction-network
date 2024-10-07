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
exports.AboutService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const about_schema_1 = require("../database/schemas/about.schema");
let AboutService = class AboutService {
    constructor(aboutModel) {
        this.aboutModel = aboutModel;
    }
    async findAll() {
        return this.aboutModel.find();
    }
    async createAbout(dto, req) {
        const user = req.user;
        if (!user || typeof user !== "object" || !("_id" in user)) {
            throw new Error("User not found");
        }
        const typedUser = user;
        const newAbout = this.aboutModel.create({ ...dto, owner: typedUser });
        return newAbout;
    }
    async createExperience(experienceId, dto) {
        const about = await this.aboutModel.findById(experienceId.toHexString());
        if (!about) {
            console.error(`About with id ${experienceId.toString()} not found.`);
            return;
        }
        await about.experience.push(dto);
        const newAbout = await this.aboutModel.findByIdAndUpdate(experienceId.toString(), { $set: { experience: about.experience } }, { new: true });
        return;
    }
};
exports.AboutService = AboutService;
__decorate([
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AboutService.prototype, "createAbout", null);
__decorate([
    __param(0, (0, common_1.Param)("experienceId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_2.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], AboutService.prototype, "createExperience", null);
exports.AboutService = AboutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(about_schema_1.About.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AboutService);
//# sourceMappingURL=about.service.js.map
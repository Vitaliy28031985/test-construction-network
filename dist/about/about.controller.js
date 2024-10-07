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
exports.AboutController = void 0;
const common_1 = require("@nestjs/common");
const about_service_1 = require("./about.service");
const about_guard_1 = require("./about.guard");
const mongoose_1 = require("mongoose");
const experience_guard_1 = require("./experience.guard");
let AboutController = class AboutController {
    constructor(aboutService) {
        this.aboutService = aboutService;
    }
    async getAll() {
        return this.aboutService.findAll();
    }
    async createNewAbout(dto, req) {
        return this.aboutService.createAbout(dto, req);
    }
    async createExperience(experienceId, dto) {
        const objectId = new mongoose_1.Types.ObjectId(experienceId);
        return this.aboutService.createExperience(objectId, dto);
    }
};
exports.AboutController = AboutController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AboutController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)("add/about"),
    (0, common_1.UseGuards)(about_guard_1.AboutGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AboutController.prototype, "createNewAbout", null);
__decorate([
    (0, common_1.Post)("add/experience/:experienceId"),
    (0, common_1.UseGuards)(experience_guard_1.ExperienceGuard),
    __param(0, (0, common_1.Param)("experienceId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AboutController.prototype, "createExperience", null);
exports.AboutController = AboutController = __decorate([
    (0, common_1.Controller)("about"),
    __metadata("design:paramtypes", [about_service_1.AboutService])
], AboutController);
//# sourceMappingURL=about.controller.js.map
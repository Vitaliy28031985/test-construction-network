"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutModule = void 0;
const common_1 = require("@nestjs/common");
const about_service_1 = require("./about.service");
const about_controller_1 = require("./about.controller");
const mongoose_1 = require("@nestjs/mongoose");
const experience_schems_1 = require("../database/schemas/experience.schems");
const about_schema_1 = require("../database/schemas/about.schema");
let AboutModule = class AboutModule {
};
exports.AboutModule = AboutModule;
exports.AboutModule = AboutModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: about_schema_1.About.name, schema: about_schema_1.AboutSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: experience_schems_1.Experience.name, schema: experience_schems_1.ExperienceSchema }]),
        ],
        controllers: [about_controller_1.AboutController],
        providers: [about_service_1.AboutService],
    })
], AboutModule);
//# sourceMappingURL=about.module.js.map
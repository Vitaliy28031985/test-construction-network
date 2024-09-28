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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user_schema_1 = require("../database/schemas/user.schema");
let UsersService = class UsersService {
    constructor(userModal) {
        this.userModal = userModal;
        this.secretKey = process.env.SECRET_KEY;
    }
    async findAll() {
        return this.userModal.find();
    }
    async register(userDto) {
        const { email, password } = userDto;
        const normalizedEmail = email.toLowerCase();
        const existingUser = await this.userModal.findOne({
            email: normalizedEmail,
        });
        if (existingUser) {
            throw new common_1.ConflictException("Email вже використовується іншим користувачем");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userModal.create({
            ...userDto,
            email: normalizedEmail,
            password: hashedPassword,
        });
        return newUser;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const normalizedEmail = email.toLowerCase();
        const user = await this.userModal.findOne({ email: normalizedEmail });
        if (!user) {
            throw new common_1.UnauthorizedException(`Користувача з email ${normalizedEmail} не існує!`);
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException("Невірний пароль! Спробуйте ще!");
        }
        const payload = { id: user._id };
        const token = jwt.sign(payload, this.secretKey, { expiresIn: "24h" });
        await this.userModal.findByIdAndUpdate(user._id, { $set: { token } });
        return { token };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map
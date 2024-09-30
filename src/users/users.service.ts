import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { User } from "src/database/schemas/user.schema";
import { user } from "src/interfaces/user";

@Injectable()
export class UsersService {
  private readonly secretKey = process.env.SECRET_KEY;
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async register(userDto: user): Promise<User> {
    const { email, password } = userDto;
    const normalizedEmail = email.toLowerCase();
    const existingUser = await this.userModel.findOne({
      email: normalizedEmail,
    });
    if (existingUser) {
      throw new ConflictException(
        "Email вже використовується іншим користувачем"
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userModel.create({
      ...userDto,
      email: normalizedEmail,
      password: hashedPassword,
    });

    return newUser;
  }

  async login(loginDto: { email: string, password: string }): Promise<{ token: string }> {
    const { email, password } = loginDto;
    const normalizedEmail = email.toLowerCase();

     const user = await this.userModel.findOne({ email: normalizedEmail });
     if (!user) {
       throw new UnauthorizedException(
         `Користувача з email ${normalizedEmail} не існує!`
       );
     }
    
       const passwordMatch = await bcrypt.compare(password, user.password);
       if (!passwordMatch) {
         throw new UnauthorizedException("Невірний пароль! Спробуйте ще!");
       }
    
      const payload = { id: user._id };
      const token = jwt.sign(payload, this.secretKey, { expiresIn: "24h" });

      await this.userModel.findByIdAndUpdate(user._id, { $set: { token } });

      return { token };
  }
}

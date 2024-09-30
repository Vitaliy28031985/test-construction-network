import { Model } from "mongoose";
import { User } from "src/database/schemas/user.schema";
import { user } from "src/interfaces/user";
export declare class UsersService {
    private userModel;
    private readonly secretKey;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    register(userDto: user): Promise<User>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
}

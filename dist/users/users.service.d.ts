import { Model } from "mongoose";
import { User } from "src/database/schemas/user.schema";
import { user } from "src/interfaces/user";
export declare class UsersService {
    private userModal;
    private readonly secretKey;
    constructor(userModal: Model<User>);
    findAll(): Promise<User[]>;
    register(userDto: user): Promise<User>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
}

import { Model } from "mongoose";
import { User } from "src/database/schemas/user.schema";
import { user } from "src/interfaces/user";
import { RequestWithUser } from "src/interfaces/requestWithUser";
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
    logout(req: RequestWithUser): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

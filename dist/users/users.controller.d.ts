import { UsersService } from "./users.service";
import { user } from "src/interfaces/user";
import { User } from "src/database/schemas/user.schema";
import { RequestWithUser } from "src/interfaces/requestWithUser";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<User[]>;
    register(registerDto: user): Promise<User>;
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

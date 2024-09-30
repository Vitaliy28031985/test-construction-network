import { UsersService } from "./users.service";
import { user } from "src/interfaces/user";
import { User } from "src/database/schemas/user.schema";
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
}

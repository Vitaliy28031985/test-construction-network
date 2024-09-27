import { Model } from "mongoose";
import { User } from "src/database/schemas/user.schema";
export declare class UsersService {
    private userModal;
    constructor(userModal: Model<User>);
    findAll(): Promise<User[]>;
}

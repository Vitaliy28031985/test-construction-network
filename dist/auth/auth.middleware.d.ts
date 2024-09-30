import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from "express";
import { Model } from 'mongoose';
import { User } from 'src/database/schemas/user.schema';
import { RequestWithUser } from 'src/interfaces/requestWithUser';
export declare class AuthMiddleware implements NestMiddleware {
    private userModel;
    private readonly secretKey;
    constructor(userModel: Model<User>);
    use(req: RequestWithUser, res: Response, next: NextFunction): Promise<void>;
}

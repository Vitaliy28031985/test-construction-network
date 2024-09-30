import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { Model } from 'mongoose';
import { User } from 'src/database/schemas/user.schema';
import { RequestWithUser } from 'src/interfaces/requestWithUser';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly secretKey = process.env.SECRET_KEY;

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async use(req: RequestWithUser, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization || "";
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      throw new UnauthorizedException("Not authorized");
    }
    try {
      const { id } = jwt.verify(token, this.secretKey) as {
        id: string;
      };
      const user = await this.userModel.findById(id).exec();
      if (!user || !user.token) {
        throw new UnauthorizedException("Not authorized");
      }

      req.user = user;
     
      next();
    } catch (error: unknown) {
      if (
        error instanceof jwt.JsonWebTokenError ||
        error instanceof jwt.TokenExpiredError
      ) {
        throw new UnauthorizedException("Not authorized");
      }
      next(error as Error);
    }
  }
}

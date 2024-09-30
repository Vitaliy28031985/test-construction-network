import { Request } from "express";
import { User } from "src/database/schemas/user.schema";

export interface RequestWithUser extends Request {
  user?: User;
}

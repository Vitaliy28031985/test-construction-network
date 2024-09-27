import { Document } from "mongoose";
import { Allow } from "./allow.schema";
import { Price } from "./price.schema";
export type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    phone: string;
    password: string;
    avatar?: string;
    role: string;
    projectIds: Allow[];
    price: Price[];
    numberProjects: number;
    allowToken?: string;
    token?: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
}>;

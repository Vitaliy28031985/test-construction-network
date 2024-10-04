import { Document } from "mongoose";
import { Types } from "mongoose";
export type RatingDocument = Rating & Document;
export declare class Rating {
    quality: number;
    deadline: number;
    attitude: number;
    responsibility: number;
}
export declare const RatingSchema: import("mongoose").Schema<Rating, import("mongoose").Model<Rating, any, any, any, Document<unknown, any, Rating> & Rating & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Rating, Document<unknown, {}, import("mongoose").FlatRecord<Rating>> & import("mongoose").FlatRecord<Rating> & {
    _id: Types.ObjectId;
}>;

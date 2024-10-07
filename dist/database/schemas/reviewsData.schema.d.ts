import { Document } from "mongoose";
import { Rating } from "./rating.schema";
import { Types } from "mongoose";
export type ReviewsDocument = Reviews & Document;
export declare class Reviews {
    totalRating: number;
    positive: string;
    negative: string;
    conclusion: string;
    rating: Rating;
    owner: Types.ObjectId;
    ownerId: Types.ObjectId;
}
export declare const ReviewsSchema: import("mongoose").Schema<Reviews, import("mongoose").Model<Reviews, any, any, any, Document<unknown, any, Reviews> & Reviews & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reviews, Document<unknown, {}, import("mongoose").FlatRecord<Reviews>> & import("mongoose").FlatRecord<Reviews> & {
    _id: Types.ObjectId;
}>;

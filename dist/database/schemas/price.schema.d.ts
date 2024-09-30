import { Document } from "mongoose";
import { Types } from "mongoose";
export type PriceDocument = Price & Document;
export declare class Price {
    title: string;
    price: number;
    owner: Types.ObjectId;
}
export declare const PriceSchema: import("mongoose").Schema<Price, import("mongoose").Model<Price, any, any, any, Document<unknown, any, Price> & Price & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Price, Document<unknown, {}, import("mongoose").FlatRecord<Price>> & import("mongoose").FlatRecord<Price> & {
    _id: Types.ObjectId;
}>;

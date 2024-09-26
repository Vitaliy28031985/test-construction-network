import { Document } from "mongoose";
export declare class Price extends Document {
    title: string;
    price: number;
}
export declare const PriceSchema: import("mongoose").Schema<Price, import("mongoose").Model<Price, any, any, any, Document<unknown, any, Price> & Price & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Price, Document<unknown, {}, import("mongoose").FlatRecord<Price>> & import("mongoose").FlatRecord<Price> & Required<{
    _id: unknown;
}>>;

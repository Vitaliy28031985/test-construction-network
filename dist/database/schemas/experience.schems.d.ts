import { Document } from "mongoose";
export type ExperienceDocument = Experience & Document;
export declare class Experience {
    title: string;
    description: string;
}
export declare const ExperienceSchema: import("mongoose").Schema<Experience, import("mongoose").Model<Experience, any, any, any, Document<unknown, any, Experience> & Experience & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Experience, Document<unknown, {}, import("mongoose").FlatRecord<Experience>> & import("mongoose").FlatRecord<Experience> & {
    _id: import("mongoose").Types.ObjectId;
}>;

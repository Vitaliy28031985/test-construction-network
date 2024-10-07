import { Document } from "mongoose";
import { Types } from "mongoose";
import { Experience } from "./experience.schems";
export type AboutDocument = About & Document;
export declare class About {
    title: string;
    additionally: string[];
    skills: string[];
    experience: Experience;
    owner: Types.ObjectId;
}
export declare const AboutSchema: import("mongoose").Schema<About, import("mongoose").Model<About, any, any, any, Document<unknown, any, About> & About & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, About, Document<unknown, {}, import("mongoose").FlatRecord<About>> & import("mongoose").FlatRecord<About> & {
    _id: Types.ObjectId;
}>;

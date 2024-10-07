import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Types } from "mongoose";
import { Experience, ExperienceSchema } from "./experience.schems";


export type AboutDocument = About & Document;

@Schema({ versionKey: false, timestamps: true })
export class About {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: [String], required: true })
  additionally: string[];

  @Prop({ type: Array, required: true })
  skills: string[];

  @Prop({ type: [ExperienceSchema], default: [] })
  experience: Experience;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  owner: Types.ObjectId;
}

export const AboutSchema = SchemaFactory.createForClass(About);
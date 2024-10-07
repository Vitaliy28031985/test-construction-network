import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ExperienceDocument = Experience & Document;

@Schema({ versionKey: false, timestamps: true })
export class Experience {
  @Prop({ type: String, required: true })
  title: string;
   
   @Prop({ type: String, required: true })
   description: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
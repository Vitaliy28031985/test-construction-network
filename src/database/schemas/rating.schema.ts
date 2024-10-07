import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Types } from "mongoose";

export type RatingDocument = Rating & Document;

@Schema()
export class Rating {
  @Prop({ type: Number, required: true, min: 1, max: 5 })
  quality: number;

  @Prop({ type: Number, required: true, min: 1, max: 5 })
  deadline: number;

  @Prop({ type: Number, required: true, min: 1, max: 5 })
  attitude: number;

  @Prop({ type: Number, required: true, min: 1, max: 5 })
  responsibility: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating); 
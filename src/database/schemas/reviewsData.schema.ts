import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Rating, RatingSchema } from "./rating.schema";
import { Types } from "mongoose"; 

export type ReviewsDocument = Reviews & Document;

@Schema({ versionKey: false, timestamps: true })
export class Reviews {
  @Prop({ type: Number, required: true, min: 0, max: 5, default: 0 })
  totalRating: number;

  @Prop({ type: String, required: true })
  positive: string;

  @Prop({ type: String, required: true })
  negative: string;

  @Prop({ type: String, required: true })
  conclusion: string;

  @Prop({ type: [RatingSchema], default: [] })
  rating: Rating;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  owner: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, default: null })
  ownerId: Types.ObjectId;
}

export const ReviewsSchema = SchemaFactory.createForClass(Reviews);
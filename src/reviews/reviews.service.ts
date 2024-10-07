import { Injectable, Param, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Reviews } from 'src/database/schemas/reviewsData.schema';
import { RatingInterface } from 'src/interfaces/rating';
import { RequestWithUser } from 'src/interfaces/requestWithUser';
import { ReviewsDto, ReviewsInterface } from "src/interfaces/revies";
import { UserGet } from 'src/interfaces/userGet';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Reviews.name) private reviewModel: Model<Reviews>) {}

  async findAll(): Promise<Reviews[]> {
    return this.reviewModel.find();
  }

  async createReviews(
    dto: ReviewsDto,
    @Req() req: RequestWithUser,
    @Param("ownerId") ownerId: Types.ObjectId
  ): Promise<Reviews> {
    const user = req.user;
    if (!user || typeof user !== "object" || !("_id" in user)) {
      throw new Error("User not found");
    }
    const typedUser = user as unknown as UserGet;
     const newReviews = this.reviewModel.create({ ...dto, ownerId, owner: typedUser });
    
    return newReviews;
  }
   
  async createRating(
    @Param("priceId") reviewId: Types.ObjectId,
    dto: RatingInterface,
  ): Promise<Reviews | void> {
    const review: ReviewsInterface | null = await this.reviewModel.findById(
      reviewId.toString()
    );

    if (!review) {
      console.error(`Review with id ${reviewId.toString()} not found.`);
      return;
    }
    await review.rating.push(dto);

    const newTotalRating: number =
      (dto.attitude + dto.deadline + dto.quality + dto.responsibility) / 4;


    const newReviews: ReviewsInterface | null =
      await this.reviewModel.findByIdAndUpdate(
        reviewId.toString(),
        { $push: { rating: review.rating } },
        { new: true }
      );
    const newTotal = await this.reviewModel.findByIdAndUpdate(
      reviewId.toString(),
      { totalRating: newTotalRating },
      { new: true }
    );

    return newTotal;
  }
}

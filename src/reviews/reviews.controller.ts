import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsDto } from "src/interfaces/revies";
import { RequestWithUser } from 'src/interfaces/requestWithUser';
import { ReviewsGuard } from './reviews.guard';
import { RatingInterface } from 'src/interfaces/rating';
import { Types } from 'mongoose';
import { RatingGuard } from './rating.guard';

@Controller("reviews")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  async getAll() {
    return this.reviewsService.findAll();
  }

  @Post("/:ownerId")
  @UseGuards(ReviewsGuard)
  async createNewReview(
    @Body() dto: ReviewsDto,
    @Req() req: RequestWithUser,
    @Param("ownerId") ownerId: string
  ) {
    const ownerObject = new Types.ObjectId(ownerId);
    return this.reviewsService.createReviews(dto, req, ownerObject);
  }
  @Post("rating/:reviewId")
  @UseGuards(RatingGuard)
  async createRating(
    @Param("reviewId") reviewId: string,
    @Body() dto: RatingInterface,
  ) {
    const objectId = new Types.ObjectId(reviewId);
    return this.reviewsService.createRating(objectId, dto);
  }
}


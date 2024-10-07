import { Model, Types } from 'mongoose';
import { Reviews } from 'src/database/schemas/reviewsData.schema';
import { RatingInterface } from 'src/interfaces/rating';
import { RequestWithUser } from 'src/interfaces/requestWithUser';
import { ReviewsDto } from "src/interfaces/revies";
export declare class ReviewsService {
    private reviewModel;
    constructor(reviewModel: Model<Reviews>);
    findAll(): Promise<Reviews[]>;
    createReviews(dto: ReviewsDto, req: RequestWithUser, ownerId: Types.ObjectId): Promise<Reviews>;
    createRating(reviewId: Types.ObjectId, dto: RatingInterface): Promise<Reviews | void>;
}

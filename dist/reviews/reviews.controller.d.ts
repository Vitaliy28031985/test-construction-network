import { ReviewsService } from './reviews.service';
import { ReviewsDto } from "src/interfaces/revies";
import { RequestWithUser } from 'src/interfaces/requestWithUser';
import { RatingInterface } from 'src/interfaces/rating';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    getAll(): Promise<import("../database/schemas/reviewsData.schema").Reviews[]>;
    createNewReview(dto: ReviewsDto, req: RequestWithUser, ownerId: string): Promise<import("../database/schemas/reviewsData.schema").Reviews>;
    createRating(reviewId: string, dto: RatingInterface): Promise<void | import("../database/schemas/reviewsData.schema").Reviews>;
}

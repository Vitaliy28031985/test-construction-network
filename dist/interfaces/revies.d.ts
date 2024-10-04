import { RatingInterface } from "./rating";
export interface ReviewsInterface {
    totalRating: number;
    positive: string;
    negative: string;
    conclusion: string;
    rating: RatingInterface[];
}
export interface ReviewsDto {
    positive: string;
    negative: string;
    conclusion: string;
}

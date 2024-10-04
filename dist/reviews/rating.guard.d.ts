import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Model } from 'mongoose';
import { Reviews } from 'src/database/schemas/reviewsData.schema';
export declare class RatingGuard implements CanActivate {
    private reviewModel;
    constructor(reviewModel: Model<Reviews>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

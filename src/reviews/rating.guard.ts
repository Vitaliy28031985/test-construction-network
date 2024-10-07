import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reviews } from 'src/database/schemas/reviewsData.schema';
import { RatingInterface } from 'src/interfaces/rating';
import { UserGet } from 'src/interfaces/userGet';

@Injectable()
export class RatingGuard implements CanActivate {
  constructor(@InjectModel(Reviews.name) private reviewModel: Model<Reviews>) {}
  async canActivate(context: ExecutionContext): Promise<boolean>  {
      const request = context.switchToHttp().getRequest();
      const user = request.user;

      if (!user || typeof user !== "object" || !("_id" in user)) {
        return false;
      }

      const typedUser = user as UserGet;

      const reviews = await this.reviewModel
        .find({ owner: typedUser._id })
        .exec();

      if (!Array.isArray(reviews)) {
        return false;
      }
    const rating: RatingInterface = reviews[0].rating;
   
    if (!Array.isArray(rating)) {
     return false;
    }
    
    if (typedUser.role !== "customer") {
      return false;
    } 

    if (rating.length > 0) {
      return false;
    } else {
      return true;
    }    
  }
}

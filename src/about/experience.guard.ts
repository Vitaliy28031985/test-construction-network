import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About } from 'src/database/schemas/about.schema';

@Injectable()
export class ExperienceGuard implements CanActivate {
  constructor(@InjectModel(About.name) private aboutModel: Model<About>) {}
  async canActivate(context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const experienceId = request.params.experienceId;

    const user = request.user;

    const about = await this.aboutModel.findById(experienceId).exec();
    
    if (about.owner.toString() === user._id.toString()) {
      return true;
    }
    
  }
}

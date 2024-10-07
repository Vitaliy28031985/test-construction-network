import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { About } from 'src/database/schemas/about.schema';
import { UserGet } from 'src/interfaces/userGet';

@Injectable()
export class AboutGuard implements CanActivate {
  constructor(@InjectModel(About.name) private aboutModel: Model<About>) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const user = request.user;

    if (!user || typeof user !== "object" || !("_id" in user)) {
      return false;
    }
    const typedUser = user as unknown as UserGet;

    const about = await this.aboutModel.find({ owner: typedUser._id }).exec();

    if (!Array.isArray(about)) {
      return false;
    }

    if (typedUser.role === "customer") {
      return false;
    }

    if (about.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}

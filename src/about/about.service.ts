import { Injectable, Param, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model, Types } from 'mongoose';
import { About } from 'src/database/schemas/about.schema';
import { AboutDto, AboutInterface, ExperienceInterface } from 'src/interfaces/about';
import { RequestWithUser } from 'src/interfaces/requestWithUser';
import { UserGet } from 'src/interfaces/userGet';

@Injectable()
export class AboutService {
  constructor(@InjectModel(About.name) private aboutModel: Model<About>) {}

  async findAll(): Promise<About[]> {
    return this.aboutModel.find();
  }

  async createAbout(
    dto: AboutDto,
    @Req() req: RequestWithUser
  ): Promise<About> {
    const user = req.user;
    if (!user || typeof user !== "object" || !("_id" in user)) {
      throw new Error("User not found");
    }
    const typedUser = user as unknown as UserGet;
    const newAbout = this.aboutModel.create({ ...dto, owner: typedUser });
    return newAbout;
  }

  async createExperience(
    @Param("experienceId") experienceId: Types.ObjectId,
    dto: ExperienceInterface
  ): Promise<About | void> {
    const about: AboutInterface | null = await this.aboutModel.findById(
      experienceId.toHexString()
    );

    if (!about) {
      console.error(`About with id ${experienceId.toString()} not found.`);
      return;
    }
  
    await about.experience.push(dto);

    const newAbout: AboutInterface | null =
      await this.aboutModel.findByIdAndUpdate(
        experienceId.toString(),
        { $set: { experience: about.experience } },
        { new: true }
      );
    
   

    return;
  }
}

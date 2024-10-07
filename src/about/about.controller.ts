import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutDto, ExperienceInterface } from 'src/interfaces/about';
import { RequestWithUser } from 'src/interfaces/requestWithUser';
import { AboutGuard } from './about.guard';
import { Types } from 'mongoose';
import { ExperienceGuard } from './experience.guard';

@Controller("about")
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  async getAll() {
    return this.aboutService.findAll();
  }
  @Post("add/about")
  @UseGuards(AboutGuard)
  async createNewAbout(@Body() dto: AboutDto, @Req() req: RequestWithUser) {
    return this.aboutService.createAbout(dto, req);
  }

  @Post("add/experience/:experienceId")
  @UseGuards(ExperienceGuard)
  async createExperience(
    @Param("experienceId") experienceId: string,
    @Body() dto: ExperienceInterface
  ) {
    
    const objectId = new Types.ObjectId(experienceId);
    return this.aboutService.createExperience(objectId, dto);
  }
}

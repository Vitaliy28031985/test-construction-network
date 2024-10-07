import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Experience, ExperienceSchema } from 'src/database/schemas/experience.schems';
import { About, AboutSchema } from 'src/database/schemas/about.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: About.name, schema: AboutSchema}]),
    MongooseModule.forFeature([{ name: Experience.name, schema: ExperienceSchema }]),
  
  ],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}

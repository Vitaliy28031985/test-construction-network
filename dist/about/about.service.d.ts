import { Model, Types } from 'mongoose';
import { About } from 'src/database/schemas/about.schema';
import { AboutDto, ExperienceInterface } from 'src/interfaces/about';
import { RequestWithUser } from 'src/interfaces/requestWithUser';
export declare class AboutService {
    private aboutModel;
    constructor(aboutModel: Model<About>);
    findAll(): Promise<About[]>;
    createAbout(dto: AboutDto, req: RequestWithUser): Promise<About>;
    createExperience(experienceId: Types.ObjectId, dto: ExperienceInterface): Promise<About | void>;
}

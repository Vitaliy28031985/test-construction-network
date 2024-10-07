import { AboutService } from './about.service';
import { AboutDto, ExperienceInterface } from 'src/interfaces/about';
import { RequestWithUser } from 'src/interfaces/requestWithUser';
export declare class AboutController {
    private readonly aboutService;
    constructor(aboutService: AboutService);
    getAll(): Promise<import("../database/schemas/about.schema").About[]>;
    createNewAbout(dto: AboutDto, req: RequestWithUser): Promise<import("../database/schemas/about.schema").About>;
    createExperience(experienceId: string, dto: ExperienceInterface): Promise<void | import("../database/schemas/about.schema").About>;
}

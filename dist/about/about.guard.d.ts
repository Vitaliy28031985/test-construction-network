import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Model } from 'mongoose';
import { About } from 'src/database/schemas/about.schema';
export declare class AboutGuard implements CanActivate {
    private aboutModel;
    constructor(aboutModel: Model<About>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

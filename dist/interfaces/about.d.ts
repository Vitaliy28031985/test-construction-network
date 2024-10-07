import { Types } from "mongoose";
export interface AboutInterface {
    title: string;
    additionally: string[];
    skills: string[];
    experience: ExperienceInterface[];
    owner: Types.ObjectId;
}
export interface AboutDto {
    title: string;
    additionally: string[];
    skills: string[];
}
export interface ExperienceInterface {
    title: string;
    description: string;
}

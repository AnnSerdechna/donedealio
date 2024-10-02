import { User } from "../models/User";
export declare class Workspace {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    user?: User | null;
    userId?: string | null;
}

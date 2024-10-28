import { Task } from "../models/Task";
import { User } from "../models/User";
import { WorkspaceCount } from "../resolvers/outputs/WorkspaceCount";
export declare class Workspace {
    id: string;
    name: string;
    description?: string | null;
    createdAt: Date;
    updatedAt: Date;
    task?: Task[];
    user?: User | null;
    userId?: string | null;
    _count?: WorkspaceCount | null;
}

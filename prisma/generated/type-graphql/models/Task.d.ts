import { File } from "../models/File";
import { Status } from "../models/Status";
import { Workspace } from "../models/Workspace";
import { TaskCount } from "../resolvers/outputs/TaskCount";
export declare class Task {
    id: string;
    name: string;
    message?: string | null;
    note?: string | null;
    dueDate?: Date | null;
    createdAt: Date;
    updatedAt: Date;
    status?: Status | null;
    statusid?: number | null;
    files?: File[];
    workspace?: Workspace;
    workspaceId: string;
    _count?: TaskCount | null;
}

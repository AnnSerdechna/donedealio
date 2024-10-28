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
    statusId?: string | null;
    priority?: Status | null;
    priorityId?: string | null;
    workspace?: Workspace | null;
    workspaceId: string;
    files?: File[];
    _count?: TaskCount | null;
}

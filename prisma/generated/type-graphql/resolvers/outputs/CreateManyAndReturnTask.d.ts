import { CreateManyAndReturnTaskPriorityArgs } from "./args/CreateManyAndReturnTaskPriorityArgs";
import { CreateManyAndReturnTaskStatusArgs } from "./args/CreateManyAndReturnTaskStatusArgs";
import { CreateManyAndReturnTaskWorkspaceArgs } from "./args/CreateManyAndReturnTaskWorkspaceArgs";
import { Priority } from "../../models/Priority";
import { Status } from "../../models/Status";
import { Workspace } from "../../models/Workspace";
export declare class CreateManyAndReturnTask {
    id: string;
    name: string;
    message: string | null;
    note: string | null;
    dueDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    statusId: number | null;
    priorityId: number | null;
    workspaceId: string;
    status: Status | null;
    priority: Priority | null;
    workspace: Workspace | null;
    getStatus(root: CreateManyAndReturnTask, args: CreateManyAndReturnTaskStatusArgs): Status | null;
    getPriority(root: CreateManyAndReturnTask, args: CreateManyAndReturnTaskPriorityArgs): Priority | null;
    getWorkspace(root: CreateManyAndReturnTask, args: CreateManyAndReturnTaskWorkspaceArgs): Workspace | null;
}

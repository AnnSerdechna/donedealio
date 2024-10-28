import { CreateManyAndReturnTaskPriorityArgs } from "./args/CreateManyAndReturnTaskPriorityArgs";
import { CreateManyAndReturnTaskStatusArgs } from "./args/CreateManyAndReturnTaskStatusArgs";
import { CreateManyAndReturnTaskWorkspaceArgs } from "./args/CreateManyAndReturnTaskWorkspaceArgs";
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
    statusId: string | null;
    priorityId: string | null;
    workspaceId: string;
    status: Status | null;
    priority: Status | null;
    workspace: Workspace | null;
    getStatus(root: CreateManyAndReturnTask, args: CreateManyAndReturnTaskStatusArgs): Status | null;
    getPriority(root: CreateManyAndReturnTask, args: CreateManyAndReturnTaskPriorityArgs): Status | null;
    getWorkspace(root: CreateManyAndReturnTask, args: CreateManyAndReturnTaskWorkspaceArgs): Workspace | null;
}

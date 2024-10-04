import { CreateManyAndReturnTaskStatusArgs } from "./args/CreateManyAndReturnTaskStatusArgs";
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
    statusid: number | null;
    workspaceId: string;
    workspace: Workspace;
    status: Status | null;
    getStatus(root: CreateManyAndReturnTask, args: CreateManyAndReturnTaskStatusArgs): Status | null;
}

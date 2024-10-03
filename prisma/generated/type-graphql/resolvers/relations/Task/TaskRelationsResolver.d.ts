import type { GraphQLResolveInfo } from "graphql";
import { File } from "../../../models/File";
import { Priority } from "../../../models/Priority";
import { Status } from "../../../models/Status";
import { Task } from "../../../models/Task";
import { Workspace } from "../../../models/Workspace";
import { TaskFilesArgs } from "./args/TaskFilesArgs";
import { TaskPriorityArgs } from "./args/TaskPriorityArgs";
import { TaskStatusArgs } from "./args/TaskStatusArgs";
export declare class TaskRelationsResolver {
    status(task: Task, ctx: any, info: GraphQLResolveInfo, args: TaskStatusArgs): Promise<Status | null>;
    priority(task: Task, ctx: any, info: GraphQLResolveInfo, args: TaskPriorityArgs): Promise<Priority | null>;
    files(task: Task, ctx: any, info: GraphQLResolveInfo, args: TaskFilesArgs): Promise<File[]>;
    workspace(task: Task, ctx: any, info: GraphQLResolveInfo): Promise<Workspace>;
}

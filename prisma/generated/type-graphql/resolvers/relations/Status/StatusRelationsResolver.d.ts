import type { GraphQLResolveInfo } from "graphql";
import { Status } from "../../../models/Status";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { StatusPriorityTasksArgs } from "./args/StatusPriorityTasksArgs";
import { StatusStatusTasksArgs } from "./args/StatusStatusTasksArgs";
export declare class StatusRelationsResolver {
    user(status: Status, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    priorityTasks(status: Status, ctx: any, info: GraphQLResolveInfo, args: StatusPriorityTasksArgs): Promise<Task[]>;
    statusTasks(status: Status, ctx: any, info: GraphQLResolveInfo, args: StatusStatusTasksArgs): Promise<Task[]>;
}

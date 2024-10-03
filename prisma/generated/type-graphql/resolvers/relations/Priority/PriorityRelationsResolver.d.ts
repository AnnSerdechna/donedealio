import type { GraphQLResolveInfo } from "graphql";
import { Priority } from "../../../models/Priority";
import { Task } from "../../../models/Task";
import { PriorityTaskArgs } from "./args/PriorityTaskArgs";
export declare class PriorityRelationsResolver {
    task(priority: Priority, ctx: any, info: GraphQLResolveInfo, args: PriorityTaskArgs): Promise<Task[]>;
}

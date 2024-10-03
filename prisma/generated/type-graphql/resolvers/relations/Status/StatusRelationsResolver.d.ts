import type { GraphQLResolveInfo } from "graphql";
import { Status } from "../../../models/Status";
import { Task } from "../../../models/Task";
import { StatusTaskArgs } from "./args/StatusTaskArgs";
export declare class StatusRelationsResolver {
    task(status: Status, ctx: any, info: GraphQLResolveInfo, args: StatusTaskArgs): Promise<Task[]>;
}

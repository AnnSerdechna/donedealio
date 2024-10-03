import type { GraphQLResolveInfo } from "graphql";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";
import { WorkspaceTaskArgs } from "./args/WorkspaceTaskArgs";
import { WorkspaceUserArgs } from "./args/WorkspaceUserArgs";
export declare class WorkspaceRelationsResolver {
    task(workspace: Workspace, ctx: any, info: GraphQLResolveInfo, args: WorkspaceTaskArgs): Promise<Task[]>;
    user(workspace: Workspace, ctx: any, info: GraphQLResolveInfo, args: WorkspaceUserArgs): Promise<User | null>;
}

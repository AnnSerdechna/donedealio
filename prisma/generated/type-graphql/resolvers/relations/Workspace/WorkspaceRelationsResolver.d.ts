import type { GraphQLResolveInfo } from "graphql";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";
import { WorkspaceUserArgs } from "./args/WorkspaceUserArgs";
export declare class WorkspaceRelationsResolver {
    user(workspace: Workspace, ctx: any, info: GraphQLResolveInfo, args: WorkspaceUserArgs): Promise<User | null>;
}

import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWorkspaceOrThrowArgs } from "./args/FindUniqueWorkspaceOrThrowArgs";
import { Workspace } from "../../../models/Workspace";
export declare class FindUniqueWorkspaceOrThrowResolver {
    getWorkspace(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWorkspaceOrThrowArgs): Promise<Workspace | null>;
}

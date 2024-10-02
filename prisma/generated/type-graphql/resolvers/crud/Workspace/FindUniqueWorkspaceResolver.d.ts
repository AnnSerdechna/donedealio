import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueWorkspaceArgs } from "./args/FindUniqueWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
export declare class FindUniqueWorkspaceResolver {
    workspace(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWorkspaceArgs): Promise<Workspace | null>;
}

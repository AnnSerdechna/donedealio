import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWorkspaceArgs } from "./args/FindFirstWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
export declare class FindFirstWorkspaceResolver {
    findFirstWorkspace(ctx: any, info: GraphQLResolveInfo, args: FindFirstWorkspaceArgs): Promise<Workspace | null>;
}

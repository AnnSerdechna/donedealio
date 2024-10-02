import type { GraphQLResolveInfo } from "graphql";
import { FindManyWorkspaceArgs } from "./args/FindManyWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
export declare class FindManyWorkspaceResolver {
    workspaces(ctx: any, info: GraphQLResolveInfo, args: FindManyWorkspaceArgs): Promise<Workspace[]>;
}

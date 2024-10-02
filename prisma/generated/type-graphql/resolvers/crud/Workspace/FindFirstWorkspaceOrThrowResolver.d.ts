import type { GraphQLResolveInfo } from "graphql";
import { FindFirstWorkspaceOrThrowArgs } from "./args/FindFirstWorkspaceOrThrowArgs";
import { Workspace } from "../../../models/Workspace";
export declare class FindFirstWorkspaceOrThrowResolver {
    findFirstWorkspaceOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstWorkspaceOrThrowArgs): Promise<Workspace | null>;
}

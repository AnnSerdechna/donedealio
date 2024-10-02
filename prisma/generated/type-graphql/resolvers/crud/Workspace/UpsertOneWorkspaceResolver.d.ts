import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneWorkspaceArgs } from "./args/UpsertOneWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
export declare class UpsertOneWorkspaceResolver {
    upsertOneWorkspace(ctx: any, info: GraphQLResolveInfo, args: UpsertOneWorkspaceArgs): Promise<Workspace>;
}

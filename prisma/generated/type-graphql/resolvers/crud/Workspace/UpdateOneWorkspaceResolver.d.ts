import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneWorkspaceArgs } from "./args/UpdateOneWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
export declare class UpdateOneWorkspaceResolver {
    updateOneWorkspace(ctx: any, info: GraphQLResolveInfo, args: UpdateOneWorkspaceArgs): Promise<Workspace | null>;
}

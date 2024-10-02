import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneWorkspaceArgs } from "./args/DeleteOneWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
export declare class DeleteOneWorkspaceResolver {
    deleteOneWorkspace(ctx: any, info: GraphQLResolveInfo, args: DeleteOneWorkspaceArgs): Promise<Workspace | null>;
}

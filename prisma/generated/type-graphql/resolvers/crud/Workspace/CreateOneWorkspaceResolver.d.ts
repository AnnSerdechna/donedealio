import type { GraphQLResolveInfo } from "graphql";
import { CreateOneWorkspaceArgs } from "./args/CreateOneWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
export declare class CreateOneWorkspaceResolver {
    createOneWorkspace(ctx: any, info: GraphQLResolveInfo, args: CreateOneWorkspaceArgs): Promise<Workspace>;
}

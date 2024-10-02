import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyWorkspaceArgs } from "./args/UpdateManyWorkspaceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWorkspaceResolver {
    updateManyWorkspace(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWorkspaceArgs): Promise<AffectedRowsOutput>;
}

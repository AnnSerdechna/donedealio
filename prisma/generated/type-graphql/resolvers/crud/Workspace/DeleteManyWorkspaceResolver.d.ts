import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyWorkspaceArgs } from "./args/DeleteManyWorkspaceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWorkspaceResolver {
    deleteManyWorkspace(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWorkspaceArgs): Promise<AffectedRowsOutput>;
}

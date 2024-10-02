import type { GraphQLResolveInfo } from "graphql";
import { CreateManyWorkspaceArgs } from "./args/CreateManyWorkspaceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWorkspaceResolver {
    createManyWorkspace(ctx: any, info: GraphQLResolveInfo, args: CreateManyWorkspaceArgs): Promise<AffectedRowsOutput>;
}

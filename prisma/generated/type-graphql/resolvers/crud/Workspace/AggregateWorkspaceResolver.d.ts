import type { GraphQLResolveInfo } from "graphql";
import { AggregateWorkspaceArgs } from "./args/AggregateWorkspaceArgs";
import { AggregateWorkspace } from "../../outputs/AggregateWorkspace";
export declare class AggregateWorkspaceResolver {
    aggregateWorkspace(ctx: any, info: GraphQLResolveInfo, args: AggregateWorkspaceArgs): Promise<AggregateWorkspace>;
}

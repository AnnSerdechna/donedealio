import type { GraphQLResolveInfo } from "graphql";
import { GroupByWorkspaceArgs } from "./args/GroupByWorkspaceArgs";
import { WorkspaceGroupBy } from "../../outputs/WorkspaceGroupBy";
export declare class GroupByWorkspaceResolver {
    groupByWorkspace(ctx: any, info: GraphQLResolveInfo, args: GroupByWorkspaceArgs): Promise<WorkspaceGroupBy[]>;
}

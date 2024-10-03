import type { GraphQLResolveInfo } from "graphql";
import { GroupByStatusArgs } from "./args/GroupByStatusArgs";
import { StatusGroupBy } from "../../outputs/StatusGroupBy";
export declare class GroupByStatusResolver {
    groupByStatus(ctx: any, info: GraphQLResolveInfo, args: GroupByStatusArgs): Promise<StatusGroupBy[]>;
}

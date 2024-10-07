import type { GraphQLResolveInfo } from "graphql";
import { GroupByPriorityArgs } from "./args/GroupByPriorityArgs";
import { PriorityGroupBy } from "../../outputs/PriorityGroupBy";
export declare class GroupByPriorityResolver {
    groupByPriority(ctx: any, info: GraphQLResolveInfo, args: GroupByPriorityArgs): Promise<PriorityGroupBy[]>;
}

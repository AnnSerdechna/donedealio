import type { GraphQLResolveInfo } from "graphql";
import { AggregatePriorityArgs } from "./args/AggregatePriorityArgs";
import { AggregatePriority } from "../../outputs/AggregatePriority";
export declare class AggregatePriorityResolver {
    aggregatePriority(ctx: any, info: GraphQLResolveInfo, args: AggregatePriorityArgs): Promise<AggregatePriority>;
}

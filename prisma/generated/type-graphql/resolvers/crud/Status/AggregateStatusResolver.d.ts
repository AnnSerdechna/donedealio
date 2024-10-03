import type { GraphQLResolveInfo } from "graphql";
import { AggregateStatusArgs } from "./args/AggregateStatusArgs";
import { AggregateStatus } from "../../outputs/AggregateStatus";
export declare class AggregateStatusResolver {
    aggregateStatus(ctx: any, info: GraphQLResolveInfo, args: AggregateStatusArgs): Promise<AggregateStatus>;
}

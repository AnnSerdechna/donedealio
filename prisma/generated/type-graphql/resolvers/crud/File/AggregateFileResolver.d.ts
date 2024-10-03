import type { GraphQLResolveInfo } from "graphql";
import { AggregateFileArgs } from "./args/AggregateFileArgs";
import { AggregateFile } from "../../outputs/AggregateFile";
export declare class AggregateFileResolver {
    aggregateFile(ctx: any, info: GraphQLResolveInfo, args: AggregateFileArgs): Promise<AggregateFile>;
}

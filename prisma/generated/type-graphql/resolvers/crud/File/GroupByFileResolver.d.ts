import type { GraphQLResolveInfo } from "graphql";
import { GroupByFileArgs } from "./args/GroupByFileArgs";
import { FileGroupBy } from "../../outputs/FileGroupBy";
export declare class GroupByFileResolver {
    groupByFile(ctx: any, info: GraphQLResolveInfo, args: GroupByFileArgs): Promise<FileGroupBy[]>;
}

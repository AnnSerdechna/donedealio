import type { GraphQLResolveInfo } from "graphql";
import { FindManyStatusArgs } from "./args/FindManyStatusArgs";
import { Status } from "../../../models/Status";
export declare class FindManyStatusResolver {
    statuses(ctx: any, info: GraphQLResolveInfo, args: FindManyStatusArgs): Promise<Status[]>;
}

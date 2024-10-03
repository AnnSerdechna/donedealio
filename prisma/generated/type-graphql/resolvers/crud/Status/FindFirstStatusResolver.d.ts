import type { GraphQLResolveInfo } from "graphql";
import { FindFirstStatusArgs } from "./args/FindFirstStatusArgs";
import { Status } from "../../../models/Status";
export declare class FindFirstStatusResolver {
    findFirstStatus(ctx: any, info: GraphQLResolveInfo, args: FindFirstStatusArgs): Promise<Status | null>;
}

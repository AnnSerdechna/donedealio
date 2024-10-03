import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueStatusArgs } from "./args/FindUniqueStatusArgs";
import { Status } from "../../../models/Status";
export declare class FindUniqueStatusResolver {
    status(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStatusArgs): Promise<Status | null>;
}

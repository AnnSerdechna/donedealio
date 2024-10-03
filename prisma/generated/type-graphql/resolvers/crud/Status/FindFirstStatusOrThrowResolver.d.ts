import type { GraphQLResolveInfo } from "graphql";
import { FindFirstStatusOrThrowArgs } from "./args/FindFirstStatusOrThrowArgs";
import { Status } from "../../../models/Status";
export declare class FindFirstStatusOrThrowResolver {
    findFirstStatusOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstStatusOrThrowArgs): Promise<Status | null>;
}

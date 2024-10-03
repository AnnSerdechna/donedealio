import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueStatusOrThrowArgs } from "./args/FindUniqueStatusOrThrowArgs";
import { Status } from "../../../models/Status";
export declare class FindUniqueStatusOrThrowResolver {
    getStatus(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStatusOrThrowArgs): Promise<Status | null>;
}

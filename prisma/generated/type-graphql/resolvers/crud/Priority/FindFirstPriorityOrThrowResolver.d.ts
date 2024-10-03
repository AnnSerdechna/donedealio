import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPriorityOrThrowArgs } from "./args/FindFirstPriorityOrThrowArgs";
import { Priority } from "../../../models/Priority";
export declare class FindFirstPriorityOrThrowResolver {
    findFirstPriorityOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPriorityOrThrowArgs): Promise<Priority | null>;
}

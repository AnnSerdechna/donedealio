import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPriorityArgs } from "./args/FindFirstPriorityArgs";
import { Priority } from "../../../models/Priority";
export declare class FindFirstPriorityResolver {
    findFirstPriority(ctx: any, info: GraphQLResolveInfo, args: FindFirstPriorityArgs): Promise<Priority | null>;
}

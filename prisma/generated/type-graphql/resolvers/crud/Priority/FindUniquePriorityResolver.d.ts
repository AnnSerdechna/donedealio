import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePriorityArgs } from "./args/FindUniquePriorityArgs";
import { Priority } from "../../../models/Priority";
export declare class FindUniquePriorityResolver {
    priority(ctx: any, info: GraphQLResolveInfo, args: FindUniquePriorityArgs): Promise<Priority | null>;
}

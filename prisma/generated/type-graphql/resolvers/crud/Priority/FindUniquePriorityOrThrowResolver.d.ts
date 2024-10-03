import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePriorityOrThrowArgs } from "./args/FindUniquePriorityOrThrowArgs";
import { Priority } from "../../../models/Priority";
export declare class FindUniquePriorityOrThrowResolver {
    getPriority(ctx: any, info: GraphQLResolveInfo, args: FindUniquePriorityOrThrowArgs): Promise<Priority | null>;
}

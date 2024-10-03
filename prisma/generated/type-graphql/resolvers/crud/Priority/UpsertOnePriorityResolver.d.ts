import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePriorityArgs } from "./args/UpsertOnePriorityArgs";
import { Priority } from "../../../models/Priority";
export declare class UpsertOnePriorityResolver {
    upsertOnePriority(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePriorityArgs): Promise<Priority>;
}

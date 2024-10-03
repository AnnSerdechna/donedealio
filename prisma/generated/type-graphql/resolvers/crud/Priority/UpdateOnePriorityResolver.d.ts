import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePriorityArgs } from "./args/UpdateOnePriorityArgs";
import { Priority } from "../../../models/Priority";
export declare class UpdateOnePriorityResolver {
    updateOnePriority(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePriorityArgs): Promise<Priority | null>;
}

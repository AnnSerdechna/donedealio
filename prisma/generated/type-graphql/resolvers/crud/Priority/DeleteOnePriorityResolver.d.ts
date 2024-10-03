import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePriorityArgs } from "./args/DeleteOnePriorityArgs";
import { Priority } from "../../../models/Priority";
export declare class DeleteOnePriorityResolver {
    deleteOnePriority(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePriorityArgs): Promise<Priority | null>;
}

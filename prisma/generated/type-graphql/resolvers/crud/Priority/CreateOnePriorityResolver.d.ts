import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePriorityArgs } from "./args/CreateOnePriorityArgs";
import { Priority } from "../../../models/Priority";
export declare class CreateOnePriorityResolver {
    createOnePriority(ctx: any, info: GraphQLResolveInfo, args: CreateOnePriorityArgs): Promise<Priority>;
}

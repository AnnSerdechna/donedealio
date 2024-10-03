import type { GraphQLResolveInfo } from "graphql";
import { FindManyPriorityArgs } from "./args/FindManyPriorityArgs";
import { Priority } from "../../../models/Priority";
export declare class FindManyPriorityResolver {
    priorities(ctx: any, info: GraphQLResolveInfo, args: FindManyPriorityArgs): Promise<Priority[]>;
}

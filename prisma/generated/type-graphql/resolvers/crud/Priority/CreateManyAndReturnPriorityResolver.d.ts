import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPriorityArgs } from "./args/CreateManyAndReturnPriorityArgs";
import { CreateManyAndReturnPriority } from "../../outputs/CreateManyAndReturnPriority";
export declare class CreateManyAndReturnPriorityResolver {
    createManyAndReturnPriority(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnPriorityArgs): Promise<CreateManyAndReturnPriority[]>;
}

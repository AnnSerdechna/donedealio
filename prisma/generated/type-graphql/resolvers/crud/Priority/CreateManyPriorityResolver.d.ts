import type { GraphQLResolveInfo } from "graphql";
import { CreateManyPriorityArgs } from "./args/CreateManyPriorityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPriorityResolver {
    createManyPriority(ctx: any, info: GraphQLResolveInfo, args: CreateManyPriorityArgs): Promise<AffectedRowsOutput>;
}

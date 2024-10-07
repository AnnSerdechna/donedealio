import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyPriorityArgs } from "./args/UpdateManyPriorityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPriorityResolver {
    updateManyPriority(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPriorityArgs): Promise<AffectedRowsOutput>;
}

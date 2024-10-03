import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyPriorityArgs } from "./args/DeleteManyPriorityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPriorityResolver {
    deleteManyPriority(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPriorityArgs): Promise<AffectedRowsOutput>;
}

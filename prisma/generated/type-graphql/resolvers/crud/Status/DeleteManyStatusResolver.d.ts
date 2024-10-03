import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyStatusArgs } from "./args/DeleteManyStatusArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyStatusResolver {
    deleteManyStatus(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStatusArgs): Promise<AffectedRowsOutput>;
}

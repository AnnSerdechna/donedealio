import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyStatusArgs } from "./args/UpdateManyStatusArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyStatusResolver {
    updateManyStatus(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStatusArgs): Promise<AffectedRowsOutput>;
}

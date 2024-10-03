import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyFileArgs } from "./args/UpdateManyFileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyFileResolver {
    updateManyFile(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFileArgs): Promise<AffectedRowsOutput>;
}

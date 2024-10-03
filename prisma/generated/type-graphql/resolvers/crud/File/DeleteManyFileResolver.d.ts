import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyFileArgs } from "./args/DeleteManyFileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyFileResolver {
    deleteManyFile(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFileArgs): Promise<AffectedRowsOutput>;
}

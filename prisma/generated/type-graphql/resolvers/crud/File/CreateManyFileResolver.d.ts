import type { GraphQLResolveInfo } from "graphql";
import { CreateManyFileArgs } from "./args/CreateManyFileArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyFileResolver {
    createManyFile(ctx: any, info: GraphQLResolveInfo, args: CreateManyFileArgs): Promise<AffectedRowsOutput>;
}

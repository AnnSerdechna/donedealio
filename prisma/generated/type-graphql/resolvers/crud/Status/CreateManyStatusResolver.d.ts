import type { GraphQLResolveInfo } from "graphql";
import { CreateManyStatusArgs } from "./args/CreateManyStatusArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyStatusResolver {
    createManyStatus(ctx: any, info: GraphQLResolveInfo, args: CreateManyStatusArgs): Promise<AffectedRowsOutput>;
}

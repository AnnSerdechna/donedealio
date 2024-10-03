import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnStatusArgs } from "./args/CreateManyAndReturnStatusArgs";
import { CreateManyAndReturnStatus } from "../../outputs/CreateManyAndReturnStatus";
export declare class CreateManyAndReturnStatusResolver {
    createManyAndReturnStatus(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnStatusArgs): Promise<CreateManyAndReturnStatus[]>;
}

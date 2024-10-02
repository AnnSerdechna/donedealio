import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnAccountArgs } from "./args/CreateManyAndReturnAccountArgs";
import { CreateManyAndReturnAccount } from "../../outputs/CreateManyAndReturnAccount";
export declare class CreateManyAndReturnAccountResolver {
    createManyAndReturnAccount(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnAccountArgs): Promise<CreateManyAndReturnAccount[]>;
}

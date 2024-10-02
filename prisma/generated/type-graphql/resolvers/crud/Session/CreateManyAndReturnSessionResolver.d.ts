import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSessionArgs } from "./args/CreateManyAndReturnSessionArgs";
import { CreateManyAndReturnSession } from "../../outputs/CreateManyAndReturnSession";
export declare class CreateManyAndReturnSessionResolver {
    createManyAndReturnSession(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnSessionArgs): Promise<CreateManyAndReturnSession[]>;
}

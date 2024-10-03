import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnFileArgs } from "./args/CreateManyAndReturnFileArgs";
import { CreateManyAndReturnFile } from "../../outputs/CreateManyAndReturnFile";
export declare class CreateManyAndReturnFileResolver {
    createManyAndReturnFile(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnFileArgs): Promise<CreateManyAndReturnFile[]>;
}

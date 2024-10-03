import type { GraphQLResolveInfo } from "graphql";
import { CreateOneFileArgs } from "./args/CreateOneFileArgs";
import { File } from "../../../models/File";
export declare class CreateOneFileResolver {
    createOneFile(ctx: any, info: GraphQLResolveInfo, args: CreateOneFileArgs): Promise<File>;
}

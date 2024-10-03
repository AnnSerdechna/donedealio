import type { GraphQLResolveInfo } from "graphql";
import { FindManyFileArgs } from "./args/FindManyFileArgs";
import { File } from "../../../models/File";
export declare class FindManyFileResolver {
    files(ctx: any, info: GraphQLResolveInfo, args: FindManyFileArgs): Promise<File[]>;
}

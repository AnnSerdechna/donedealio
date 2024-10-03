import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFileArgs } from "./args/FindUniqueFileArgs";
import { File } from "../../../models/File";
export declare class FindUniqueFileResolver {
    file(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFileArgs): Promise<File | null>;
}

import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFileOrThrowArgs } from "./args/FindUniqueFileOrThrowArgs";
import { File } from "../../../models/File";
export declare class FindUniqueFileOrThrowResolver {
    getFile(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFileOrThrowArgs): Promise<File | null>;
}

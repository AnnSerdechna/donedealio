import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFileArgs } from "./args/FindFirstFileArgs";
import { File } from "../../../models/File";
export declare class FindFirstFileResolver {
    findFirstFile(ctx: any, info: GraphQLResolveInfo, args: FindFirstFileArgs): Promise<File | null>;
}

import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFileOrThrowArgs } from "./args/FindFirstFileOrThrowArgs";
import { File } from "../../../models/File";
export declare class FindFirstFileOrThrowResolver {
    findFirstFileOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstFileOrThrowArgs): Promise<File | null>;
}

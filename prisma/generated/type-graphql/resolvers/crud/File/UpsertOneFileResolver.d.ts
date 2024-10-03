import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneFileArgs } from "./args/UpsertOneFileArgs";
import { File } from "../../../models/File";
export declare class UpsertOneFileResolver {
    upsertOneFile(ctx: any, info: GraphQLResolveInfo, args: UpsertOneFileArgs): Promise<File>;
}

import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneFileArgs } from "./args/UpdateOneFileArgs";
import { File } from "../../../models/File";
export declare class UpdateOneFileResolver {
    updateOneFile(ctx: any, info: GraphQLResolveInfo, args: UpdateOneFileArgs): Promise<File | null>;
}

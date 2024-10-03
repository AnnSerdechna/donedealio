import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneFileArgs } from "./args/DeleteOneFileArgs";
import { File } from "../../../models/File";
export declare class DeleteOneFileResolver {
    deleteOneFile(ctx: any, info: GraphQLResolveInfo, args: DeleteOneFileArgs): Promise<File | null>;
}

import type { GraphQLResolveInfo } from "graphql";
import { File } from "../../../models/File";
import { Task } from "../../../models/Task";
import { FileTaskArgs } from "./args/FileTaskArgs";
export declare class FileRelationsResolver {
    task(file: File, ctx: any, info: GraphQLResolveInfo, args: FileTaskArgs): Promise<Task | null>;
}

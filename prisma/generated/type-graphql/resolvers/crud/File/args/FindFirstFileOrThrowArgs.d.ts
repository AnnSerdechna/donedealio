import { FileOrderByWithRelationInput } from "../../../inputs/FileOrderByWithRelationInput";
import { FileWhereInput } from "../../../inputs/FileWhereInput";
import { FileWhereUniqueInput } from "../../../inputs/FileWhereUniqueInput";
export declare class FindFirstFileOrThrowArgs {
    where?: FileWhereInput | undefined;
    orderBy?: FileOrderByWithRelationInput[] | undefined;
    cursor?: FileWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "url" | "fileId" | "name" | "taskId"> | undefined;
}

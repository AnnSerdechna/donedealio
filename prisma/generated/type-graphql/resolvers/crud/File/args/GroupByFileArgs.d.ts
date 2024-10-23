import { FileOrderByWithAggregationInput } from "../../../inputs/FileOrderByWithAggregationInput";
import { FileScalarWhereWithAggregatesInput } from "../../../inputs/FileScalarWhereWithAggregatesInput";
import { FileWhereInput } from "../../../inputs/FileWhereInput";
export declare class GroupByFileArgs {
    where?: FileWhereInput | undefined;
    orderBy?: FileOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "url" | "fileId" | "name" | "taskId">;
    having?: FileScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

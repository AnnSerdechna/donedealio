import { FileAvgOrderByAggregateInput } from "../inputs/FileAvgOrderByAggregateInput";
import { FileCountOrderByAggregateInput } from "../inputs/FileCountOrderByAggregateInput";
import { FileMaxOrderByAggregateInput } from "../inputs/FileMaxOrderByAggregateInput";
import { FileMinOrderByAggregateInput } from "../inputs/FileMinOrderByAggregateInput";
import { FileSumOrderByAggregateInput } from "../inputs/FileSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class FileOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    file?: "asc" | "desc" | undefined;
    taskId?: SortOrderInput | undefined;
    _count?: FileCountOrderByAggregateInput | undefined;
    _avg?: FileAvgOrderByAggregateInput | undefined;
    _max?: FileMaxOrderByAggregateInput | undefined;
    _min?: FileMinOrderByAggregateInput | undefined;
    _sum?: FileSumOrderByAggregateInput | undefined;
}

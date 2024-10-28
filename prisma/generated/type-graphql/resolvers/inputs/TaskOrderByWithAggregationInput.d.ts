import { SortOrderInput } from "../inputs/SortOrderInput";
import { TaskCountOrderByAggregateInput } from "../inputs/TaskCountOrderByAggregateInput";
import { TaskMaxOrderByAggregateInput } from "../inputs/TaskMaxOrderByAggregateInput";
import { TaskMinOrderByAggregateInput } from "../inputs/TaskMinOrderByAggregateInput";
export declare class TaskOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    message?: SortOrderInput | undefined;
    note?: SortOrderInput | undefined;
    dueDate?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    statusId?: SortOrderInput | undefined;
    priorityId?: SortOrderInput | undefined;
    workspaceId?: "asc" | "desc" | undefined;
    _count?: TaskCountOrderByAggregateInput | undefined;
    _max?: TaskMaxOrderByAggregateInput | undefined;
    _min?: TaskMinOrderByAggregateInput | undefined;
}

import { SortOrderInput } from "../inputs/SortOrderInput";
import { WorkspaceCountOrderByAggregateInput } from "../inputs/WorkspaceCountOrderByAggregateInput";
import { WorkspaceMaxOrderByAggregateInput } from "../inputs/WorkspaceMaxOrderByAggregateInput";
import { WorkspaceMinOrderByAggregateInput } from "../inputs/WorkspaceMinOrderByAggregateInput";
export declare class WorkspaceOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    userId?: SortOrderInput | undefined;
    _count?: WorkspaceCountOrderByAggregateInput | undefined;
    _max?: WorkspaceMaxOrderByAggregateInput | undefined;
    _min?: WorkspaceMinOrderByAggregateInput | undefined;
}

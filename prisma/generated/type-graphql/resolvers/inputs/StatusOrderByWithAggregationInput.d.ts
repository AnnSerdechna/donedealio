import { SortOrderInput } from "../inputs/SortOrderInput";
import { StatusCountOrderByAggregateInput } from "../inputs/StatusCountOrderByAggregateInput";
import { StatusMaxOrderByAggregateInput } from "../inputs/StatusMaxOrderByAggregateInput";
import { StatusMinOrderByAggregateInput } from "../inputs/StatusMinOrderByAggregateInput";
export declare class StatusOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    color?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: StatusCountOrderByAggregateInput | undefined;
    _max?: StatusMaxOrderByAggregateInput | undefined;
    _min?: StatusMinOrderByAggregateInput | undefined;
}

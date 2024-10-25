import { SortOrderInput } from "../inputs/SortOrderInput";
import { StatusAvgOrderByAggregateInput } from "../inputs/StatusAvgOrderByAggregateInput";
import { StatusCountOrderByAggregateInput } from "../inputs/StatusCountOrderByAggregateInput";
import { StatusMaxOrderByAggregateInput } from "../inputs/StatusMaxOrderByAggregateInput";
import { StatusMinOrderByAggregateInput } from "../inputs/StatusMinOrderByAggregateInput";
import { StatusSumOrderByAggregateInput } from "../inputs/StatusSumOrderByAggregateInput";
export declare class StatusOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    color?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: StatusCountOrderByAggregateInput | undefined;
    _avg?: StatusAvgOrderByAggregateInput | undefined;
    _max?: StatusMaxOrderByAggregateInput | undefined;
    _min?: StatusMinOrderByAggregateInput | undefined;
    _sum?: StatusSumOrderByAggregateInput | undefined;
}

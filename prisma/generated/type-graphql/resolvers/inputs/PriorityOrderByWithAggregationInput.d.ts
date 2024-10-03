import { PriorityAvgOrderByAggregateInput } from "../inputs/PriorityAvgOrderByAggregateInput";
import { PriorityCountOrderByAggregateInput } from "../inputs/PriorityCountOrderByAggregateInput";
import { PriorityMaxOrderByAggregateInput } from "../inputs/PriorityMaxOrderByAggregateInput";
import { PriorityMinOrderByAggregateInput } from "../inputs/PriorityMinOrderByAggregateInput";
import { PrioritySumOrderByAggregateInput } from "../inputs/PrioritySumOrderByAggregateInput";
export declare class PriorityOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    _count?: PriorityCountOrderByAggregateInput | undefined;
    _avg?: PriorityAvgOrderByAggregateInput | undefined;
    _max?: PriorityMaxOrderByAggregateInput | undefined;
    _min?: PriorityMinOrderByAggregateInput | undefined;
    _sum?: PrioritySumOrderByAggregateInput | undefined;
}

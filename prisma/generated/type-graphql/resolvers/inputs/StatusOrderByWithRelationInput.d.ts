import { SortOrderInput } from "../inputs/SortOrderInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class StatusOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: SortOrderInput | undefined;
    color?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    priorityTasks?: TaskOrderByRelationAggregateInput | undefined;
    statusTasks?: TaskOrderByRelationAggregateInput | undefined;
}

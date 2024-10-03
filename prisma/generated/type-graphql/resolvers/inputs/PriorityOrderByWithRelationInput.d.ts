import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
export declare class PriorityOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    task?: TaskOrderByRelationAggregateInput | undefined;
}

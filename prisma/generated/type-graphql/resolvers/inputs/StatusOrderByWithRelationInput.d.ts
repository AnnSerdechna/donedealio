import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
export declare class StatusOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    task?: TaskOrderByRelationAggregateInput | undefined;
}

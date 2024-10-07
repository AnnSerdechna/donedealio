import { FileOrderByRelationAggregateInput } from "../inputs/FileOrderByRelationAggregateInput";
import { PriorityOrderByWithRelationInput } from "../inputs/PriorityOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { StatusOrderByWithRelationInput } from "../inputs/StatusOrderByWithRelationInput";
import { WorkspaceOrderByWithRelationInput } from "../inputs/WorkspaceOrderByWithRelationInput";
export declare class TaskOrderByWithRelationInput {
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
    status?: StatusOrderByWithRelationInput | undefined;
    priority?: PriorityOrderByWithRelationInput | undefined;
    files?: FileOrderByRelationAggregateInput | undefined;
    workspace?: WorkspaceOrderByWithRelationInput | undefined;
}

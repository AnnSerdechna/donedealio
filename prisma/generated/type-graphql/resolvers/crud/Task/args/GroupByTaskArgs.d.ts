import { TaskOrderByWithAggregationInput } from "../../../inputs/TaskOrderByWithAggregationInput";
import { TaskScalarWhereWithAggregatesInput } from "../../../inputs/TaskScalarWhereWithAggregatesInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
export declare class GroupByTaskArgs {
    where?: TaskWhereInput | undefined;
    orderBy?: TaskOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "message" | "note" | "dueDate" | "createdAt" | "updatedAt" | "statusid" | "priorityId" | "workspaceId">;
    having?: TaskScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TaskScalarWhereWithAggregatesInput {
    AND?: TaskScalarWhereWithAggregatesInput[] | undefined;
    OR?: TaskScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TaskScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    message?: StringNullableWithAggregatesFilter | undefined;
    note?: StringNullableWithAggregatesFilter | undefined;
    dueDate?: DateTimeNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    statusId?: StringNullableWithAggregatesFilter | undefined;
    priorityId?: StringNullableWithAggregatesFilter | undefined;
    workspaceId?: StringWithAggregatesFilter | undefined;
}

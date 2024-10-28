import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TaskScalarWhereInput {
    AND?: TaskScalarWhereInput[] | undefined;
    OR?: TaskScalarWhereInput[] | undefined;
    NOT?: TaskScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    message?: StringNullableFilter | undefined;
    note?: StringNullableFilter | undefined;
    dueDate?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    statusId?: StringNullableFilter | undefined;
    priorityId?: StringNullableFilter | undefined;
    workspaceId?: StringFilter | undefined;
}

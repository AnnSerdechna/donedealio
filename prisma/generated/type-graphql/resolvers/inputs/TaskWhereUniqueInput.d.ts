import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FileListRelationFilter } from "../inputs/FileListRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PriorityNullableRelationFilter } from "../inputs/PriorityNullableRelationFilter";
import { StatusNullableRelationFilter } from "../inputs/StatusNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
import { WorkspaceRelationFilter } from "../inputs/WorkspaceRelationFilter";
export declare class TaskWhereUniqueInput {
    id?: string | undefined;
    AND?: TaskWhereInput[] | undefined;
    OR?: TaskWhereInput[] | undefined;
    NOT?: TaskWhereInput[] | undefined;
    name?: StringFilter | undefined;
    message?: StringNullableFilter | undefined;
    note?: StringNullableFilter | undefined;
    dueDate?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    statusId?: IntNullableFilter | undefined;
    priorityId?: IntNullableFilter | undefined;
    workspaceId?: StringFilter | undefined;
    status?: StatusNullableRelationFilter | undefined;
    priority?: PriorityNullableRelationFilter | undefined;
    files?: FileListRelationFilter | undefined;
    workspace?: WorkspaceRelationFilter | undefined;
}

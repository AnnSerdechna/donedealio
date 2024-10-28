import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FileListRelationFilter } from "../inputs/FileListRelationFilter";
import { StatusNullableRelationFilter } from "../inputs/StatusNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
import { WorkspaceNullableRelationFilter } from "../inputs/WorkspaceNullableRelationFilter";
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
    statusId?: StringNullableFilter | undefined;
    priorityId?: StringNullableFilter | undefined;
    workspaceId?: StringFilter | undefined;
    status?: StatusNullableRelationFilter | undefined;
    priority?: StatusNullableRelationFilter | undefined;
    workspace?: WorkspaceNullableRelationFilter | undefined;
    files?: FileListRelationFilter | undefined;
}

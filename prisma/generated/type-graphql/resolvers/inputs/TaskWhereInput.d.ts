import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FileListRelationFilter } from "../inputs/FileListRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StatusNullableRelationFilter } from "../inputs/StatusNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WorkspaceNullableRelationFilter } from "../inputs/WorkspaceNullableRelationFilter";
export declare class TaskWhereInput {
    AND?: TaskWhereInput[] | undefined;
    OR?: TaskWhereInput[] | undefined;
    NOT?: TaskWhereInput[] | undefined;
    id?: StringFilter | undefined;
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
    priority?: StatusNullableRelationFilter | undefined;
    workspace?: WorkspaceNullableRelationFilter | undefined;
    files?: FileListRelationFilter | undefined;
}

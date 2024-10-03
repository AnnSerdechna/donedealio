import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
import { WorkspaceWhereInput } from "../inputs/WorkspaceWhereInput";
export declare class WorkspaceWhereUniqueInput {
    id?: string | undefined;
    AND?: WorkspaceWhereInput[] | undefined;
    OR?: WorkspaceWhereInput[] | undefined;
    NOT?: WorkspaceWhereInput[] | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: StringNullableFilter | undefined;
    task?: TaskListRelationFilter | undefined;
    user?: UserNullableRelationFilter | undefined;
}

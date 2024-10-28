import { EnumStatusTypeFilter } from "../inputs/EnumStatusTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class StatusWhereInput {
    AND?: StatusWhereInput[] | undefined;
    OR?: StatusWhereInput[] | undefined;
    NOT?: StatusWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    color?: StringFilter | undefined;
    type?: EnumStatusTypeFilter | undefined;
    userId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    priorityTasks?: TaskListRelationFilter | undefined;
    statusTasks?: TaskListRelationFilter | undefined;
}

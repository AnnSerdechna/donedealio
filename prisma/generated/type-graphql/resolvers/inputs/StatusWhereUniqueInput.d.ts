import { StatusWhereInput } from "../inputs/StatusWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
export declare class StatusWhereUniqueInput {
    id?: number | undefined;
    name?: string | undefined;
    AND?: StatusWhereInput[] | undefined;
    OR?: StatusWhereInput[] | undefined;
    NOT?: StatusWhereInput[] | undefined;
    color?: StringFilter | undefined;
    task?: TaskListRelationFilter | undefined;
}

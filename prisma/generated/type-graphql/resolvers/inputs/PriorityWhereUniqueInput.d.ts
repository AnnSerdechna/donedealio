import { PriorityWhereInput } from "../inputs/PriorityWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
export declare class PriorityWhereUniqueInput {
    id?: number | undefined;
    name?: string | undefined;
    AND?: PriorityWhereInput[] | undefined;
    OR?: PriorityWhereInput[] | undefined;
    NOT?: PriorityWhereInput[] | undefined;
    color?: StringFilter | undefined;
    task?: TaskListRelationFilter | undefined;
}

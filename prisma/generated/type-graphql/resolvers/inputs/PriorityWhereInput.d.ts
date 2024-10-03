import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
export declare class PriorityWhereInput {
    AND?: PriorityWhereInput[] | undefined;
    OR?: PriorityWhereInput[] | undefined;
    NOT?: PriorityWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    color?: StringFilter | undefined;
    task?: TaskListRelationFilter | undefined;
}

import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
export declare class StatusWhereInput {
    AND?: StatusWhereInput[] | undefined;
    OR?: StatusWhereInput[] | undefined;
    NOT?: StatusWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    color?: StringFilter | undefined;
    task?: TaskListRelationFilter | undefined;
}

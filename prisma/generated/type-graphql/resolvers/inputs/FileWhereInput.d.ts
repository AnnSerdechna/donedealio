import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskNullableRelationFilter } from "../inputs/TaskNullableRelationFilter";
export declare class FileWhereInput {
    AND?: FileWhereInput[] | undefined;
    OR?: FileWhereInput[] | undefined;
    NOT?: FileWhereInput[] | undefined;
    id?: IntFilter | undefined;
    file?: StringFilter | undefined;
    taskId?: StringNullableFilter | undefined;
    task?: TaskNullableRelationFilter | undefined;
}
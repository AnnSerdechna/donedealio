import { FileWhereInput } from "../inputs/FileWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskNullableRelationFilter } from "../inputs/TaskNullableRelationFilter";
export declare class FileWhereUniqueInput {
    id?: number | undefined;
    AND?: FileWhereInput[] | undefined;
    OR?: FileWhereInput[] | undefined;
    NOT?: FileWhereInput[] | undefined;
    file?: StringFilter | undefined;
    taskId?: StringNullableFilter | undefined;
    task?: TaskNullableRelationFilter | undefined;
}

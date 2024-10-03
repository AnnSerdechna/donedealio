import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class FileScalarWhereInput {
    AND?: FileScalarWhereInput[] | undefined;
    OR?: FileScalarWhereInput[] | undefined;
    NOT?: FileScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    file?: StringFilter | undefined;
    taskId?: StringNullableFilter | undefined;
}

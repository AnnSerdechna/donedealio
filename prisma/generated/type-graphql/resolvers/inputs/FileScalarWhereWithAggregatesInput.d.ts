import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class FileScalarWhereWithAggregatesInput {
    AND?: FileScalarWhereWithAggregatesInput[] | undefined;
    OR?: FileScalarWhereWithAggregatesInput[] | undefined;
    NOT?: FileScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    url?: StringWithAggregatesFilter | undefined;
    fileId?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    taskId?: StringNullableWithAggregatesFilter | undefined;
}

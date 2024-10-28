import { EnumStatusTypeWithAggregatesFilter } from "../inputs/EnumStatusTypeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StatusScalarWhereWithAggregatesInput {
    AND?: StatusScalarWhereWithAggregatesInput[] | undefined;
    OR?: StatusScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StatusScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    color?: StringWithAggregatesFilter | undefined;
    type?: EnumStatusTypeWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}

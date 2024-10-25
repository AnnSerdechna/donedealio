import { EnumStatusTypeWithAggregatesFilter } from "../inputs/EnumStatusTypeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StatusScalarWhereWithAggregatesInput {
    AND?: StatusScalarWhereWithAggregatesInput[] | undefined;
    OR?: StatusScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StatusScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    color?: StringWithAggregatesFilter | undefined;
    type?: EnumStatusTypeWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}

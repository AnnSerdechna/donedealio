import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StatusScalarWhereWithAggregatesInput {
    AND?: StatusScalarWhereWithAggregatesInput[] | undefined;
    OR?: StatusScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StatusScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    color?: StringWithAggregatesFilter | undefined;
}

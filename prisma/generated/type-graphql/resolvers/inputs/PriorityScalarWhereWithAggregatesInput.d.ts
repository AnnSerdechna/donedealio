import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PriorityScalarWhereWithAggregatesInput {
    AND?: PriorityScalarWhereWithAggregatesInput[] | undefined;
    OR?: PriorityScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PriorityScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    color?: StringWithAggregatesFilter | undefined;
}

import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class WorkspaceScalarWhereWithAggregatesInput {
    AND?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;
    OR?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;
    NOT?: WorkspaceScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
}

import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
export declare class WorkspaceWhereInput {
    AND?: WorkspaceWhereInput[] | undefined;
    OR?: WorkspaceWhereInput[] | undefined;
    NOT?: WorkspaceWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: StringNullableFilter | undefined;
    user?: UserNullableRelationFilter | undefined;
}
